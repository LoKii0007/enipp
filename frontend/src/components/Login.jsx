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
import AuthHook from "@/hooks/AuthContext";
import toast from "react-hot-toast";
import supabase from "@/supabase/supabase";
import { Loader2 } from "lucide-react";
import useTheme from "@/hooks/ThemeContex";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [unconfirmedEmail, setUnconfirmedEmail] = useState(null);
  const [resendLoading, setResendLoading] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [resetPasswordLoading, setResetPasswordLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { signInWithRemember } = AuthHook();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: window.location.origin,
        },
      });

      if (error) {
        toast.error("Google Sign-In Error: " + error.message);
        return;
      }

      toast.success("Redirecting to Google sign in...");
    } catch (error) {
      toast.error("Google Sign-In Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    if (forgotPasswordMode) {
      handleForgotPassword(data);
      return;
    }

    setLoading(true);
    setUnconfirmedEmail(null);

    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        // Check if the error is due to email not confirmed
        if (error.message.toLowerCase().includes("email not confirmed")) {
          setUnconfirmedEmail(data.email);
          toast.error("Please confirm your email address before signing in");
        } else {
          toast.error("Sign In Error: " + error.message);
        }
        return;
      }

      // Get user metadata to get the name
      const { data: userData } = await supabase.auth.getUser();

      // Use the new signInWithRemember function
      signInWithRemember(
        userData.user,
        authData.session.access_token,
        rememberMe
      );

      toast.success("User signed in successfully");
      navigate("/");
    } catch (error) {
      toast.error("Sign In Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendConfirmation = async () => {
    setResendLoading(true);
    try {
      const email = unconfirmedEmail || getValues("email");

      if (!email) {
        toast.error("Please enter your email address");
        return;
      }

      const { error } = await supabase.auth.resend({
        type: "signup",
        email: email,
        options: {
          emailRedirectTo: `${
            import.meta.env.VITE_REDIRECT_URL
          }/email-confirmation`,
        },
      });

      if (error) {
        toast.error("Error sending confirmation email: " + error.message);
        return;
      }

      toast.success(
        "Confirmation email has been resent. Please check your inbox."
      );
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setResendLoading(false);
    }
  };

  const handleForgotPassword = async (data) => {
    setResetPasswordLoading(true);
    try {
      const email = data.email;
      if (!email) {
        toast.error("Please enter your email address");
        return;
      }

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${import.meta.env.VITE_REDIRECT_URL}/reset-password`,
      });

      if (error) {
        toast.error("Error sending password reset email: " + error.message);
        return;
      }

      setResetEmailSent(true);
      toast.success("Password reset email sent. Please check your inbox.");
    } catch (error) {
      toast.error("Error: " + error.message);
    } finally {
      setResetPasswordLoading(false);
    }
  };

  if (forgotPasswordMode) {
    return (
      <div
        className={`min-h-screen grid grid-cols-1 items-center ${
          theme === "dark"
            ? "bg-enipp-dark1 text-white"
            : "bg-[#EEEEEE] text-black"
        } w-full h-screen overflow-hidden md:grid-cols-1`}
      >
        {/* <div className="signup-left hidden gap-3 px-5 justify-end overflow-hidden w-full md:flex">
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
        </div> */}
        <div className="signup-right flex justify-center items-center w-full">
          <Card className={`border-0 rounded-none shadow-none ${theme === "dark" ? "bg-enipp-dark1 text-white" : "bg-[#EEEEEE] text-black"} max-w-xl w-full`}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-[36px] font-bold text-center tracking-tight">
                Reset Password
              </CardTitle>
              <CardDescription className="text-zinc-400 text-center text-[18px]">
                {resetEmailSent
                  ? "Reset email has been sent"
                  : "Enter your email to receive a password reset link"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {resetEmailSent ? (
                <div className="space-y-4">
                  <div className={`bg-emerald-900/30 border border-emerald-700 ${theme === "dark" ? "text-white" : "text-black"} p-6 rounded text-center`}>
                    <p className="mb-4">
                      We've sent a password reset link to your email.
                    </p>
                    <p className="mb-6">
                      Please check your inbox and spam folder. The link will
                      expire after 24 hours.
                    </p>
                  </div>
                  <Button
                    className="w-full bg-zinc-800 hover:bg-zinc-700 text-white "
                    onClick={() => setForgotPasswordMode(false)}
                  >
                    Back to Login
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5 font-[Quicksand] font-semibold"
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    className={`${
                      theme === "dark"
                        ? "bg-zinc-800 text-white placeholder:text-zinc-400"
                        : "bg-zinc-200 text-black placeholder:text-zinc-900"
                    } px-4 py-3 border-none `}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <Button
                      type="button"
                      className={`${
                        theme === "dark"
                          ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                          : "bg-zinc-200 hover:bg-zinc-300 text-black"
                      } tf-button after:rounded-md after:!bg-gradient-to-r after:from-enipp-purple1 after:to-enipp-purple2`}
                      onClick={() => setForgotPasswordMode(false)}
                    >
                      <div className="z-20">Back to Login</div>
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-white after:rounded-md tf-button after:!bg-black"
                      disabled={resetPasswordLoading}
                    >
                      {resetPasswordLoading ? (
                        <Loader2 className="animate-spin w-4 h-4" />
                      ) : (
                        <div className="z-20">Send Reset Link</div>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen grid grid-cols-1 items-center justify-center ${
        theme === "dark" ? "bg-enipp-dark1 text-white" : "bg-[#EEEEEE] text-black"
      } w-full h-screen overflow-hidden md:grid-cols-1`}
    >
      {/* <div className="signup-left hidden gap-3 px-5 justify-end overflow-hidden w-full md:flex">
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
      </div> */}
      <div className="signup-right flex justify-center items-center w-full">
        <Card
          className={`border-0 rounded-none shadow-none ${
            theme === "dark"
              ? "bg-enipp-dark1 text-white"
              : "bg-[#EEEEEE] text-black"
          } max-w-xl w-full`}
        >
          <CardHeader className="space-y-1">
            <CardTitle className="text-[36px] font-bold text-center tracking-tight">
              SIGN IN
            </CardTitle>
            <CardDescription className="text-zinc-400 text-center text-[18px]">
              Welcome back! Please enter your details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 font-[Quicksand] font-semibold"
            >
              <Input
                type="email"
                placeholder="Email"
                className={`${
                  theme === "dark"
                    ? "bg-zinc-800 text-white placeholder:text-zinc-400"
                    : "bg-zinc-200 text-black placeholder:text-zinc-900"
                } px-4 py-3 border-none `}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <Input
                type="password"
                placeholder="Password"
                className={`${
                  theme === "dark"
                    ? "bg-zinc-800 text-white placeholder:text-zinc-400"
                    : "bg-zinc-200 text-black placeholder:text-zinc-900"
                } px-4 py-3 border-none `}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              {unconfirmedEmail && (
                <div className="bg-amber-900/30 border border-amber-700 p-3 rounded">
                  <p className="text-amber-300 text-sm mb-2">
                    Your email ({unconfirmedEmail}) needs to be verified before
                    signing in.
                  </p>
                  <Button
                    type="button"
                    className="w-full bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 tf-button after:!bg-black text-white after:rounded-md"
                    onClick={handleResendConfirmation}
                    disabled={resendLoading}
                  >
                    {resendLoading ? (
                      <Loader2 className="animate-spin w-4 h-4" />
                    ) : (
                      <div className="z-20">Resend Confirmation Email</div>
                    )}
                  </Button>
                </div>
              )}

              {/* desktop  */}
              <div className="justify-between items-center hidden md:flex">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox bg-zinc-800 rounded border-zinc-600 text-enipp-purple1 focus:ring-enipp-purple1"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <span className="">Remember me</span>
                </label>

                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="text-enipp-purple1 hover:underline"
                >
                  Signup
                </button>

                <button
                  type="button"
                  onClick={() => setForgotPasswordMode(true)}
                  className="text-enipp-purple1 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* mobile  */}
              <div className="justify-between md:hidden items-center grid grid-cols-1 space-y-2 text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox bg-zinc-800 rounded border-zinc-600 text-enipp-purple1 focus:ring-enipp-purple1"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <span className="">Remember me</span>
                </label>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => navigate("/signup")}
                    className="text-enipp-purple1 hover:underline text-left"
                  >
                    Signup
                  </button>

                  <button
                    type="button"
                    onClick={() => setForgotPasswordMode(true)}
                    className="text-enipp-purple1 hover:underline text-left"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full flex justify-center items-center bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-white tf-button after:!bg-black rounded-md shadow-md after:rounded-md"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin w-4 h-4" />
                ) : (
                  <div className="z-20">SIGN IN</div>
                )}
              </Button>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div
                  className={`w-full border-t ${
                    theme === "dark" ? "border-white" : "border-zinc-900"
                  }`}
                ></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span
                  className={`px-2 ${
                    theme === "dark"
                      ? "bg-enipp-dark1 text-zinc-400"
                      : "bg-[#EEEEEE] text-zinc-900"
                  }`}
                >
                  or
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={signInWithGoogle}
                className="flex items-center justify-center gap-2 text-white bg-zinc-900 tf-button relative py-4 rounded-md shadow-md"
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
              {/* <button
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
              </button> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
