import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import useTheme from "@/hooks/ThemeContex";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme()

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "subscribers"), { email });
      toast.success("Email added successfully.");
      setEmail("");
    } catch (error) {
      toast.error("Error adding email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <footer className={`${theme === "dark" ? "bg-[#141B22] text-white" : "bg-[#ffffff] text-black"} w-full px-5 pt-12 flex flex-col gap-6 md:px-12 xl:px-[15%] `}>
        <div className="footer-top grid grid-cols-1 gap-12 justify-center items-center md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 text-2xl">
              <img className="w-7 h-7"  src="/images/enipp-logo.png" alt="" />
              ENIPP
            </div>
            <p className="text-left font-[quicksand]">
            Enipp is the perfect way to break the shackles of reality
            </p>
            <p className="text-left font-[quicksand]">
            Address: D-52 kalkaji, New Delhi, India, 110019
            </p>
            <p className="text-left font-[quicksand]">
            Email: Admin@enipp.com <br /> Phone: +91-99711 75159
            </p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="flex flex-col gap-3">
              <div className="py-2">Services</div>
              <Link className="capitalize py-2 text-[#c3c3c5]">No code Editor</Link>
              <Link className="capitalize py-2 text-[#c3c3c5]">Custom Requests</Link>
              <Link className="capitalize py-2 text-[#c3c3c5]">Collaborations</Link>
              <Link className="capitalize py-2 text-[#c3c3c5]">Shop(coming soon)</Link>
            </div>
            <div className="flex flex-col gap-3 text-left">
              <div className="py-2">Links</div>
              <Link className="capitalize py-2 text-[#c3c3c5]">Privacy Policy</Link>
              <Link className="capitalize py-2 text-[#c3c3c5]">Terms of Service</Link>
              <Link className="capitalize py-2 text-[#c3c3c5]">Contact Us</Link>
              <Link className="capitalize py-2 text-[#c3c3c5]">Careers</Link>
            </div>
          </div>
          <form
            className="flex w-full justify-center items-center"
            onSubmit={handleSignup}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`${theme === "dark" ? "bg-[#040B11] text-white" : "bg-[#EEEEEE] text-black"} p-3 w-full font-[quicksand] border-none focus:ring-0 focus:outline-none md:w-2/3`}
            />
            <button
              disabled={!email || loading}
              type="submit"
              className="w-[140px] py-3 bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 text-black tf-button flex justify-center items-center font-bold after:!bg-[#5865F2]"
            >
              <div className="z-20">
                {loading ? <Loader2 className=" animate-spin" /> : "SIGNUP"}
              </div>
            </button>
          </form>
        </div>
        <div className="border-b border-zinc-700 mt-3 " ></div>
        <div className="footer-bottom flex flex-col justify-center items-center pb-4 md:flex-row md:justify-between gap-4 ">
          <div>ENIPP - <span className="font-sans" >2025</span> All rights reserved</div>
          <div className="flex gap-5">
            <Link to='https://www.instagram.com/enipp_official/' target="_blank" className="ig-icon p-2 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </Link>
            <Link  className="ig-icon  p-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-discord"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
