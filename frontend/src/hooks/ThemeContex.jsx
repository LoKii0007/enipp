import { createContext, useContext, useState } from "react";

const context = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <context.Provider
      value={{
        theme, setTheme
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
