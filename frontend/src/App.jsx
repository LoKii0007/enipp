import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./components/signup";
import { AuthProvider } from "./hooks/AuthContext";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
// import ComingSoonPage from "./screens/ComingSoon";
import Footer from "./components/Footer";
import { ThemeProvider } from "./hooks/ThemeContex";
import ContactUs from "./screens/ContactUs";
import Roadmap from "./screens/Roadmap";
import Team from "./screens/Team";
import About from "./screens/About";
import './css/home.css'
import './index.css'

// Prismic imports
// import { PrismicProvider } from '@prismicio/react';
// import { createClient, linkResolver } from './prismic';

function App() {
  // const client = createClient();
  
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          {/* <PrismicProvider client={client} linkResolver={linkResolver}> */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<ContactUs />} />
              {/* <Route path="/coming-soon" element={<ComingSoonPage />} /> */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          {/* </PrismicProvider> */}
          <Footer />
        </ThemeProvider>
        <Toaster />
      </AuthProvider>
    </>
  );
}

export default App;
