import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
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

function AppContent() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const { isLoading } = AuthHook();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

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

      const preloadPromises = MODELS.map(model => {
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
        // Add a small delay to ensure smooth transition
        await new Promise(resolve => setTimeout(resolve, 500));
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
        <Route path={pathnames.home} element={<Home />} />
        <Route path={pathnames.about} element={<About />} />
        <Route path={pathnames.team} element={<Team />} />
        <Route path={pathnames.contact} element={<ContactUs />} />

        <Route path={pathnames.signup} element={<SignUp />} />
        <Route path={pathnames.login} element={<Login />} />
        <Route path={pathnames.resetPassword} element={<ResetPassword />} />
        <Route path={pathnames.emailConfirmation} element={<EmailConfirmation />} />
        <Route path={pathnames.privacyPolicy} element={<PrivacyPolicy />} />
        <Route path={pathnames.termsAndConditions} element={<Terms />} />
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
