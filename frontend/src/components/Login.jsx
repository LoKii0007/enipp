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
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, googleProvider } from "@/firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthHook from "@/hooks/AuthContext";
import toast from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { setUser } = AuthHook();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if( !result){
        toast.error("Google Sign-In Error: Unable to sign in");
        return
      }
      toast.success("User signed in successfully");
      setUser({
        email: result.user.email,
        token: result.user.accessToken
      })
      console.log("User signed in:", result.user);
      navigate("/");
    } catch (error) {
      toast.error("Google Sign-In Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if( !userCredential){
        toast.error("Sign In Error: Unable to sign in");
        return
      }
      toast.success("User signed in successfully");
      setUser({
        email: userCredential.user.email,
        token: userCredential.user.accessToken,
      });
      navigate("/");
    } catch (error) {
      toast.error("Sign In Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = prompt("Enter your email to reset password:");
    if (email) {
      try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent. Check your inbox.");
      } catch (error) {
        console.error("Password Reset Error:", error.message);
        alert("Error sending password reset email: " + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 items-center bg-black w-full h-screen overflow-hidden md:grid-cols-2">
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
      <div className="signup-right flex justify-center items-center w-full">
        <Card className="border-0 rounded-none bg-black max-w-xl w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-[36px] font-bold text-center tracking-tight text-white">
              SIGN IN
            </CardTitle>
            <CardDescription className="text-zinc-400 text-center text-[18px]">
              Welcome back! Please enter your details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox bg-zinc-800"
                  />
                  <span className="text-white">Remember me</span>
                </label>
                <a
                  onClick={handleForgotPassword}
                  href="/forgot-password"
                  className="text-emerald-500 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-none border-none"
                disabled={loading}
              >
                {loading ? "Signing In..." : "SIGN IN"}
              </Button>
            </form>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t bg-black"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-zinc-400">or</span>
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
