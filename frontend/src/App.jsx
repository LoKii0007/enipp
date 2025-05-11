import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./components/signup";
import { AuthProvider } from "./hooks/AuthContext";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import EmailConfirmation from "./components/EmailConfirmation";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { ThemeProvider } from "./hooks/ThemeContex";
import ContactUs from "./screens/ContactUs";
import Roadmap from "./screens/Roadmap";
import Team from "./screens/Team";
import About from "./screens/About";
import "./css/home.css";
import "./index.css";
import { useEffect, useState } from "react";
import AuthHook from "./hooks/AuthContext";
import { Loader2 } from "lucide-react";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import Terms from "./screens/Terms";
import InitialLoader from "./components/InitialLoader";
import { pathnames } from "./utils/constants";
import ReactGA from "react-ga4";

const MODELS = [
  '/models/flower-transformed.glb',
  '/models/flower.gltf',
  '/models/disco-transformed.glb',
  '/models/disco.gltf',
  '/models/disco.glb',
  '/models/model2.gltf',
  '/models/model1-transformed.glb',
  '/models/model1.gltf'
];

// Initialize Google Analytics 4
const TRACKING_ID = "G-LZKEMX0LMM"; // Replace with your GA4 Measurement ID
ReactGA.initialize(TRACKING_ID);

// Loading component to show while auth state is initializing
function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <Loader2 className="w-12 h-12 text-enipp-purple1 animate-spin mb-4" />
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
}

// ProtectedRoute component for all routes
function ProtectedRoute({ children }) {
  const { userLoggedIn, isLoading } = AuthHook();
  const navigate = useNavigate();
  const location = useLocation();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  // Define bypass routes
  const bypassRoutes = [
    pathnames.login,
    pathnames.signup,
    pathnames.resetPassword,
    pathnames.emailConfirmation,
  ];

  useEffect(() => {
    // Skip redirect logic for bypass routes
    if (bypassRoutes.includes(location.pathname)) {
      setIsRedirecting(false);
      setAssetsLoaded(true);
      return;
    }

    // Skip if auth is loading or user is logged in
    if (isLoading || userLoggedIn) {
      setIsRedirecting(false);
      setAssetsLoaded(true);
      return;
    }

    // Mark assets as loaded (triggered by AppContent)
    setAssetsLoaded(true);

    // Start redirect timer for unauthenticated users after assets load
    if (!userLoggedIn && assetsLoaded) {
      const timer = setTimeout(() => {
        setIsRedirecting(true);
        // Track redirect event
        ReactGA.event({
          category: "Navigation",
          action: "Redirect to Login",
          label: location.pathname,
        });
        // Show redirect message for 1 second before actual redirect
        setTimeout(() => {
          navigate(pathnames.login);
        }, 1000);
      }, 3500);

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }
  }, [userLoggedIn, isLoading, location.pathname, assetsLoaded, navigate]);

  // Show redirect loader if redirecting
  if (isRedirecting) {
    return <InitialLoader redirectMode={true} />;
  }

  // Render children if authenticated, on bypass route, or assets loaded
  return children;
}

function AppContent() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const { isLoading } = AuthHook();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Track page views on route change
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: document.title || location.pathname,
    });
  }, [location]);

  useEffect(() => {
    // Hide Navbar on EmailConfirmation and ResetPassword pages
    setShowNavbar(
      !location.pathname.includes("/email-confirmation") &&
      !location.pathname.includes("/reset-password")
    );
  }, [location]);

  useEffect(() => {
    const preloadAssets = async () => {
      const totalModels = MODELS.length;
      let loadedModels = 0;

      const preloadPromises = MODELS.map((model) => {
        return new Promise((resolve, reject) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'fetch';
          link.href = model;
          link.onload = () => {
            loadedModels++;
            setLoadingProgress((loadedModels / totalModels) * 100);
            resolve();
          };
          link.onerror = reject;
          document.head.appendChild(link);
        });
      });

      try {
        await Promise.all(preloadPromises);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setIsInitialLoading(false);
      } catch (error) {
        console.error('Error preloading models:', error);
        setIsInitialLoading(false);
      }
    };

    preloadAssets();
  }, []);

  if (isLoading || isInitialLoading) {
    return <InitialLoader progress={loadingProgress} />;
  }

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path={pathnames.home}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path={pathnames.about}
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path={pathnames.team}
          element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          }
        />
        <Route
          path={pathnames.contact}
          element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          }
        />
        <Route
          path={pathnames.signup}
          element={
            <ProtectedRoute>
              <SignUp />
            </ProtectedRoute>
          }
        />
        <Route
          path={pathnames.login}
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path={pathnames.resetPassword}
          element={
            <ProtectedRoute>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path={pathnames.emailConfirmation}
          element={
            <ProtectedRoute>
              <EmailConfirmation />
            </ProtectedRoute>
          }
        />
        <Route
          path={pathnames.privacyPolicy}
          element={
            <ProtectedRoute>
              <PrivacyPolicy />
            </ProtectedRoute>
          }
        />
        <Route
          path={pathnames.termsAndConditions}
          element={
            <ProtectedRoute>
              <Terms />
            </ProtectedRoute>
          }
        />
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
}

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;