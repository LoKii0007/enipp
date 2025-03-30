import { createContext, useContext, useState, useEffect } from "react";
import supabase from "@/supabase/supabase";

const AuthContext = createContext();
const LOCAL_STORAGE_KEY = "enipp_user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  // Update user and handle localStorage
  const updateUser = (userData, token, remember = false) => {
    if (!userData) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setUser(null);
      setUserLoggedIn(false);
      return;
    }
    
    const userInfo = {
      email: userData.email,
      token: token,
      emailVerified: userData.email_confirmed_at !== null,
      displayName: userData.user_metadata?.full_name || userData.user_metadata?.display_name || userData.email.split('@')[0],
    };
    
    setUser(userInfo);
    setIsEmailVerified(userData.email_confirmed_at !== null);
    setUserLoggedIn(true);
    
    // Store in localStorage if remember is true
    if (remember) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
    }
  };
  
  useEffect(() => {
    // First check if we have a saved user in localStorage
    const checkLocalStorage = () => {
      const savedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setUserLoggedIn(true);
        setIsEmailVerified(parsedUser.emailVerified || false);
      }
    };
    
    // Check for active session
    const getSession = async () => {
      setIsLoading(true);
      checkLocalStorage(); // First try localStorage
      
      try {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          updateUser(data.session.user, data.session.access_token);
        }
      } catch (error) {
        console.error("Error getting session:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    getSession();
    
    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          updateUser(session.user, session.access_token);
        } else if (event === 'SIGNED_OUT') {
          updateUser(null);
        } else if (event === 'USER_UPDATED') {
          if (session) {
            updateUser(session.user, session.access_token);
          }
        }
      }
    );
    
    return () => {
      subscription?.unsubscribe();
    };
  }, []);
  
  const checkEmailVerification = async () => {
    try {
      const { data: { user: userData } } = await supabase.auth.getUser();
      
      if (userData) {
        const isVerified = userData.email_confirmed_at !== null;
        setIsEmailVerified(isVerified);
        
        // Update user object with verification status
        if (user) {
          setUser({
            ...user,
            emailVerified: isVerified,
          });
          
          // Update localStorage if the user was remembered
          if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({
              ...user,
              emailVerified: isVerified,
            }));
          }
        }
        
        return isVerified;
      }
      return false;
    } catch (error) {
      console.error("Error checking email verification:", error);
      return false;
    }
  };
  
  const signInWithRemember = (userData, token, remember) => {
    updateUser(userData, token, remember);
  };
  
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      updateUser(null);
      setIsEmailVerified(true); // Reset to default
    }
    return { error };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: (userData) => setUser(userData),
        userLoggedIn,
        setUserLoggedIn,
        isEmailVerified,
        checkEmailVerification,
        signOut,
        signInWithRemember,
        isLoading
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
