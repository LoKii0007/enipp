import { set, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import CustomCard from "./CustomCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthHook from "@/hooks/AuthContext";
import supabase from "@/supabase/supabase";
import { Loader2 } from "lucide-react";


export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [resendLoading, setResendLoading] = useState(false);
  const { setUser } = AuthHook();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        }
      });
      
      if (error) {
        toast.error("Google Sign-In Error: " + error.message);
        return;
      }
      
      toast.success("Redirecting to Google sign in...");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendConfirmation = async () => {
    setResendLoading(true);
    try {
      if (!userEmail) {
        toast.error("No email address to send verification to");
        return;
      }
      
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: userEmail,
      });
      
      if (error) {
        toast.error("Error sending confirmation email: " + error.message);
        return;
      }
      
      toast.success("Verification email has been resent. Please check your inbox.");
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setResendLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            name: data.name,
          },
          emailRedirectTo: window.location.origin + '/email-confirmation',
        }
      });
      
      if (error) {
        toast.error(error.message || "An error occurred. Please try again.");
        return;
      }
      
      // Store user data with display name in AuthContext
      if (authData.user) {
        const userWithName = {
          ...authData.user,
          user_metadata: {
            ...authData.user.user_metadata,
            name: data.name
          }
        };
        setUser({
          email: authData.user.email,
          token: authData.session?.access_token,
          displayName: data.name,
          emailVerified: false
        });
      }
      
      setUserEmail(data.email);
      setVerificationSent(true);
      toast.success("An email has been sent to verify your account.");
    } catch (error) {
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (verificationSent) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black w-full">
        <Card className="border-0 rounded-none bg-black w-full max-w-xl mx-4">
          <CardHeader className="space-y-1">
            <CardTitle className="text-[36px] font-bold text-center tracking-tight text-white">
              Verify Your Email
            </CardTitle>
            <CardDescription className="text-zinc-400 text-center text-[18px]">
              We've sent a verification email to {userEmail}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-emerald-900/30 border border-emerald-700 p-6 rounded text-center">
              <p className="text-white mb-6">
                Please check your inbox and click the verification link to complete your registration.
              </p>
              <p className="text-zinc-400 mb-6">
                If you don't see the email, check your spam folder.
              </p>
              <Button
                type="button"
                className="bg-emerald-500 hover:bg-emerald-600 text-white border-none"
                onClick={handleResendConfirmation}
                disabled={resendLoading}
              >
                {resendLoading ? <Loader2 className="animate-spin w-4 h-4" /> : "Resend Verification Email"}
              </Button>
            </div>
            <div className="flex justify-center mt-6">
              <Button
                type="button"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                onClick={() => navigate("/login")}
              >
                Go to Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen grid grid-cols-2 items-center bg-black w-full h-screen overflow-hidden">
      <div className="signup-left hidden gap-3 px-5 justify-end overflow-hidden w-full md:flex">
        <div className={`flex flex-col gap-8 custom-card-1 `}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
        <div className={`flex flex-col gap-8 custom-card-2 `}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
        <div className={`flex flex-col gap-8 custom-card-3 `}>
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <Card className="border-0 rounded-none bg-black w-full max-w-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-[36px] font-bold text-center tracking-tight text-white">
              SIGN UP
            </CardTitle>
            <CardDescription className="text-zinc-400 text-center text-[18px]">
              Welcome back! Please enter your details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 font-[Quicksand]">
              <Input
                type="text"
                placeholder="Name"
                className="bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-400 border-none rounded-none"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              <Input
                type="email"
                placeholder="Email"
                className="bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-400 border-none rounded-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <Input
                type="password"
                placeholder="Password"
                className="bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-400 border-none rounded-none"
                {...register("password", {
                  required: "Password is required",
                  minLength: 6,
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-white rounded-none"
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : "SIGN UP"}
              </Button>
            </form>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t bg-black"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-zinc-400">
                  or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={signInWithGoogle}
                className="flex items-center justify-center gap-2 text-white bg-zinc-900 tf-button relative py-4"
                disabled={loading}
              >
                <div className="z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>
                </div>
                <span className="z-20">Google</span>
              </button>
              <button
                variant="outline"
                className="flex items-center justify-center gap-2 text-white bg-zinc-900 tf-button relative py-4"
              >
                <div className="z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </div>
                <span className="z-20">Facebook</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

