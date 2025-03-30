import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import supabase from "@/supabase/supabase";
import { Loader2 } from "lucide-react";
import Footer from "./Footer";
import AuthHook from "@/hooks/AuthContext";

export default function EmailConfirmation() {
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(null);
  const [showFooter, setShowFooter] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { checkEmailVerification } = AuthHook();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // The hash contains the access token and type=signup
        if (!location.hash.includes("type=signup")) {
          setError("Invalid confirmation link");
          setVerifying(false);
          setShowFooter(true);
          return;
        }

        // Get the current session
        const { data: sessionData } = await supabase.auth.getSession();
        
        if (!sessionData.session) {
          setError("Session expired or invalid");
          setVerifying(false);
          setShowFooter(true);
          return;
        }

        // Get user information including metadata
        const { data: userData } = await supabase.auth.getUser();
        
        if (userData?.user) {
          // If we have a session, the email was confirmed successfully
          await checkEmailVerification(); // Update auth context
          
          // Check if the user was saved in localStorage and update it with verification
          const savedUser = localStorage.getItem("enipp_user");
          if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            localStorage.setItem("enipp_user", JSON.stringify({
              ...parsedUser,
              emailVerified: true,
              displayName: userData.user.user_metadata?.name || userData.user.email.split('@')[0]
            }));
          }
        }
        
        setVerified(true);
        setVerifying(false);
        setShowFooter(true);
        toast.success("Email verified successfully!");
        
        // Automatically redirect to home after a delay
        setTimeout(() => {
          navigate("/");
        }, 5000);
      } catch (err) {
        console.error("Error verifying email:", err);
        setError("An error occurred while verifying your email");
        setVerifying(false);
        setShowFooter(true);
      }
    };

    verifyEmail();
  }, [location, navigate, checkEmailVerification]);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-black w-full">
        <Card className="border-0 rounded-none bg-black max-w-md w-full mx-4">
          <CardHeader className="space-y-1">
            <CardTitle className="text-[36px] font-bold text-center tracking-tight text-white">
              {verifying ? "Verifying Email" : verified ? "Email Verified" : "Verification Failed"}
            </CardTitle>
            <CardDescription className="text-zinc-400 text-center text-[18px]">
              {verifying 
                ? "Please wait while we verify your email address" 
                : verified 
                  ? "Your email has been successfully verified" 
                  : "We couldn't verify your email address"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {verifying ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="animate-spin w-12 h-12 text-enipp-purple1 mb-4" />
                <p className="text-white text-center">Verifying your email address...</p>
              </div>
            ) : verified ? (
              <div className="space-y-6">
                <div className="bg-emerald-900/30 border border-emerald-700 p-6 rounded text-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 mx-auto mb-4 text-emerald-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white text-lg mb-4">
                    Your email has been verified successfully!
                  </p>
                  <p className="text-zinc-400 mb-2">
                    You can now sign in to your account
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Redirecting to homepage in a few seconds...
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    className="bg-zinc-800 hover:bg-zinc-700 text-white tf-button after:!bg-gradient-to-r after:from-enipp-purple1 after:to-enipp-purple2"
                    onClick={() => navigate("/login")}
                  >
                    <div className="z-20">Go to Login</div>
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-white tf-button after:!bg-black"
                    onClick={() => navigate("/")}
                  >
                    <div className="z-20">Go to Home</div>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-red-900/30 border border-red-700 p-6 rounded text-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 mx-auto mb-4 text-red-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-white text-lg mb-4">
                    Verification Failed
                  </p>
                  <p className="text-zinc-400 mb-6">
                    {error || "We couldn't verify your email. The link may have expired or been used already."}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    className="bg-zinc-800 hover:bg-zinc-700 text-white tf-button after:!bg-gradient-to-r after:from-enipp-purple1 after:to-enipp-purple2"
                    onClick={() => navigate("/login")}
                  >
                    <div className="z-20">Go to Login</div>
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-white tf-button after:!bg-black"
                    onClick={() => navigate("/")}
                  >
                    <div className="z-20">Go to Home</div>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {showFooter && <Footer />}
    </>
  );
} 