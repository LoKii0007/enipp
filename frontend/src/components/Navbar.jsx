import useTheme from "@/hooks/ThemeContex";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHook from "@/hooks/AuthContext";
import toast from "react-hot-toast";
import supabase from "@/supabase/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const navMenu = [
  { name: "Home", route: "" },
  { name: "About", route: "about" },
  // { name: "Marketplace", route: "marketplace" },
  { name: "Team", route: "team" },
  { name: "Contact", route: "contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [navBottom, setNavBottom] = useState(false);
  const navigate = useNavigate();
  const { user, userLoggedIn, signOut } = AuthHook();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);


  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      const { error } = await signOut();
      if (error) {
        toast.error("Sign Out Error: " + error.message);
        return;
      }
      toast.success("Successfully signed out");
      navigate("/");
    } catch (error) {
      toast.error("Sign Out Error: " + error.message);
    } finally {
      setIsSigningOut(false);
      setShowSignOutDialog(false);
    }
  };

  const openSignOutDialog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowSignOutDialog(true);
  };

  useEffect(() => {}, [theme]);

  return (
    <>
      
      {/* Sign Out Confirmation Dialog */}
      <Dialog open={showSignOutDialog} onOpenChange={setShowSignOutDialog}>
        <DialogContent className={`sm:max-w-[425px] ${
          theme === "dark" 
            ? "bg-zinc-900 text-white border-zinc-800" 
            : "bg-white text-black border-zinc-300"
        }`}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Sign Out Confirmation</DialogTitle>
            <DialogDescription className={theme === "dark" ? "text-zinc-400" : "text-zinc-500"}>
              Are you sure you want to sign out from your account?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-row justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setShowSignOutDialog(false)}
              className={`${
                theme === "dark"
                  ? "bg-transparent border-zinc-700 text-white hover:bg-zinc-800 hover:text-white"
                  : "bg-transparent border-zinc-300 text-black hover:bg-zinc-100 hover:text-black"
              } tf-button relative rounded-none`}
            >
              <div className="z-20">Cancel</div>
            </Button>
            <Button
              onClick={handleSignOut}
              className={`w-[100px] bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border hover:opacity-90 tf-button relative
                ${theme === "dark" ? "after:!bg-zinc-800 text-white border-white" : "after:!bg-[#ffffff] text-black border-black"}
                rounded-none`}
              disabled={isSigningOut}
            >
              {isSigningOut ? (
                <div className="z-20 flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </div>
              ) : (
                <div className="z-20">Sign Out</div>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Desktop Navbar */}
      <nav
        className={`sticky hidden md:flex top-0 left-0 py-3 px-8 ${
          theme === "dark"
            ? "bg-enipp-dark1 text-white"
            : "bg-[#ffffff] text-black"
        } w-full z-50 gap-12 text-xl justify-center items-center`}
      >
        <div className="nav-item py-2 flex justify-center text-3xl items-center gap-2">
          <img src="/images/enipp-logo.png" className="w-8 h-8" alt="" />
          <Link to="/" className=" flex items-center justify-center leading-none font-extrabold">ENIPP</Link>
        </div>
        {navMenu.map((item, index) => (
          <div
            onClick={() => navigate(`/${item.route}`)}
            key={index}
            className="nav-item py-2 hover:text-enipp-purple1 cursor-pointer"
          >
            {item.name}
          </div>
        ))}
        {userLoggedIn ? (
          <div
            onClick={openSignOutDialog}
            className="nav-item py-2 hover:text-enipp-purple1 cursor-pointer flex items-center gap-2"
          >
            <span>Sign Out</span>
          </div>
        ) : (
          <div
            onClick={() => navigate("/login")}
            className="nav-item py-2 hover:text-enipp-purple1 cursor-pointer"
          >
            Sign In
          </div>
        )}
        {/* {theme === "dark" ? (
          <div
            onClick={() => setTheme("light")}
            className="nav-item p-3 hover:text-enipp-purple1 text-enipp-purple1 rounded-full bg-[#141B22] cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-brightness-high-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
            </svg>
          </div>
        ) : (
          <div
            onClick={() => setTheme("dark")}
            className="nav-item p-3 bg-white text-gray-500 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-moon-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
            </svg>
          </div>
        )} */}
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`flex sticky top-0 z-50 flex-col px-5 py-4 ${
          theme === "dark"
            ? "bg-enipp-dark1 text-white"
            : "bg-[#ffffff] text-black"
        } w-screen md:hidden relative`}
      >
        <div className="nav-top flex justify-between items-center ">
          <div className="flex gap-2 items-center">
            <img src="/images/enipp-logo.png" className="w-6" alt="" />
            <Link to="/" className="text-2xl font-extrabold">ENIPP</Link>
          </div>
          <div className="flex gap-3 items-center">
            {/* {theme === "dark" ? (
              <div
                onClick={() => setTheme("light")}
                className="nav-item p-3 hover:text-enipp-purple1 text-enipp-purple1 rounded-full bg-[#141B22] cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </div>
            ) : (
              <div
                onClick={() => setTheme("dark")}
                className="nav-item p-3 bg-white text-gray-500 rounded-full cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-moon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
              </div>
            )} */}

            <button
              onClick={() => setNavBottom((prev) => !prev)}
              className="menu-icon z-50"
            >
              {!navBottom ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={` ${
            theme === "dark"
              ? "bg-enipp-dark1 text-white"
              : "bg-[#ffffff] text-black"
          }nav-bottom px-5 transition-all duration-500 ease-in-out flex flex-col overflow-hidden absolute gap-2 top-[64px] z-50 w-full left-0 ${
            navBottom ? "h-[244px] pb-3" : "h-0 p-0"
          }`}
        >
          {userLoggedIn && (
            <div className="nav-item py-2 text-enipp-purple1 font-medium border-b border-zinc-800 mb-2 pb-3">
              {user?.displayName}
            </div>
          )}
          {navMenu.map((item, index) => (
            <div
              onClick={() =>{ 
                navigate(`/${item.route}`)
                setNavBottom(false)
              }}
              key={index}
              className="nav-item py-2 cursor-pointer"
            >
              {item.name}
            </div>
          ))}
          {userLoggedIn ? (
            <div
              onClick={openSignOutDialog}
              className="nav-item py-2 cursor-pointer text-enipp-purple1"
            >
              Sign Out
            </div>
          ) : (
            <div
              onClick={() => navigate("/login")}
              className="nav-item py-2 cursor-pointer text-enipp-purple1"
            >
              Sign In
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
