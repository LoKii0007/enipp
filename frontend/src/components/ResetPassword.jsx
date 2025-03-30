import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import supabase from "@/supabase/supabase";
import { Loader2 } from "lucide-react";
import Footer from "./Footer";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [resetComplete, setResetComplete] = useState(false);
  const navigate = useNavigate();

  // Watch password for confirmation validation
  const password = watch("password", "");

  // Check if user has a valid recovery token
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      // If no recovery token in URL, redirect to login
      if (!window.location.hash.includes("type=recovery")) {
        navigate("/login");
      }
    };
    
    checkSession();
  }, [navigate]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: data.password
      });

      if (error) {
        toast.error("Error updating password: " + error.message);
        return;
      }

      toast.success("Password has been updated successfully");
      setResetComplete(true);
      
      // After a delay, redirect to login
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-black w-full">
        <Card className="border-0 rounded-none bg-black max-w-md w-full mx-4">
          <CardHeader className="space-y-1">
            <CardTitle className="text-[36px] font-bold text-center tracking-tight text-white">
              {resetComplete ? "Password Updated" : "Create New Password"}
            </CardTitle>
            <CardDescription className="text-zinc-400 text-center text-[18px]">
              {resetComplete 
                ? "Your password has been successfully reset" 
                : "Enter a new secure password for your account"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {resetComplete ? (
              <div className="space-y-4">
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
                  <p className="text-white mb-4">
                    Your password has been updated successfully.
                  </p>
                  <p className="text-zinc-400 mb-6">
                    You will be redirected to the login page shortly.
                  </p>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-white tf-button after:!bg-black"
                  onClick={() => navigate("/login")}
                >
                  <div className="z-20">Go to Login</div>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="New Password"
                    className="bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-400 border-none rounded-none"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-400 border-none rounded-none"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: value => value === password || "Passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <div className="bg-zinc-800/50 p-4 rounded border border-zinc-700">
                  <p className="text-white text-sm mb-2">Password requirements:</p>
                  <ul className="text-zinc-400 text-xs space-y-1 list-disc pl-4">
                    <li>Minimum 8 characters</li>
                    <li>At least one uppercase letter</li>
                    <li>At least one lowercase letter</li>
                    <li>At least one number</li>
                  </ul>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-white tf-button after:!bg-black"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader2 className="animate-spin w-4 h-4" />
                  ) : (
                    <div className="z-20">Update Password</div>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
} 