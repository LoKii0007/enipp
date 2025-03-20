import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userLoggedIn,
        setUserLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function AuthHook() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
