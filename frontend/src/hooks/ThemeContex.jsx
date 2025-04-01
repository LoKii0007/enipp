import { createContext, useContext, useState, useEffect, useMemo } from "react";

const context = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const perPage = useMemo(() => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 4;
  }, [isMobile, isTablet]);

  return (
    <context.Provider
      value={{
        theme, setTheme, isMobile, setIsMobile, isTablet, setIsTablet, isDesktop, setIsDesktop, perPage
      }}
    >
      {children}
    </context.Provider>
  );
};

export default function useTheme() {
  const ct = useContext(context);
  if (!ct) {
    throw new Error("useTheme must be used within AuthProvider");
  }
  return ct;
}
