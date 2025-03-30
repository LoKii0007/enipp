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
import './css/home.css'
import './index.css'
import { useEffect, useState } from "react";
import AuthHook from "./hooks/AuthContext";
import { Loader2 } from "lucide-react";

// Prismic imports
// import { PrismicProvider } from '@prismicio/react';
// import { createClient, linkResolver } from './prismic';

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
  
  useEffect(() => {
    // Hide Navbar on EmailConfirmation and ResetPassword pages
    setShowNavbar(
      !location.pathname.includes('/email-confirmation') && 
      !location.pathname.includes('/reset-password')
    );
  }, [location]);
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
}

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <AppContent />
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
