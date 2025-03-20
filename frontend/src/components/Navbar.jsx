import useTheme from "@/hooks/ThemeContex";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const navMenu = [
  { name: "Home", route: "home" },
  { name: "About", route: "about" },
  { name: "Roadmap", route: "roadmap" },
  { name: "Team", route: "team" },
  { name: "Contact", route: "contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [navBottom, setNavBottom] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {}, [theme]);

  return (
    <>
      <nav
        className={`sticky hidden md:flex top-0 left-0 py-3 px-8 ${
          theme === "dark"
            ? "bg-[#040B11] text-white"
            : "bg-[#ffffff] text-black"
        } w-full z-50 gap-12 text-xl justify-center items-center`}
      >
        <div className="nav-item py-2 flex justify-center text-3xl items-center gap-2">
          <img src="/images/enipp-logo.png" className="w-8" alt="" />
          ENIPP
        </div>
        {navMenu.map((item, index) => (
          <div
            onClick={() => navigate(`/${item.route}`)}
            key={index}
            className="nav-item py-2 hover:text-emerald-500 cursor-pointer"
          >
            {item.name}
          </div>
        ))}
        {theme === "dark" ? (
          <div
            onClick={() => setTheme("light")}
            className="nav-item p-3 hover:text-emerald-500 text-emerald-500 rounded-full bg-[#141B22] cursor-pointer"
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
        )}
      </nav>
      <nav
        className={`flex sticky top-0 z-50 flex-col px-5 py-4 ${
          theme === "dark"
            ? "bg-[#040B11] text-white"
            : "bg-[#ffffff] text-black"
        } w-screen md:hidden relative`}
      >
        <div className="nav-top flex justify-between items-center ">
          <div className="flex gap-2 items-center">
            <img src="/images/enipp-logo.png" className="w-6" alt="" />
            <div className="text-2xl">ENIPP</div>
          </div>
          <div className="flex gap-3 items-center">
            {theme === "dark" ? (
              <div
                onClick={() => setTheme("light")}
                className="nav-item p-3 hover:text-emerald-500 text-emerald-500 rounded-full bg-[#141B22] cursor-pointer"
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
            )}

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
              ? "bg-[#040B11] text-white"
              : "bg-[#ffffff] text-black"
          }nav-bottom px-5 transition-all duration-500 ease-in-out flex flex-col overflow-hidden absolute gap-2 top-[74px]  w-full left-0 ${
            navBottom ? "h-[244px] pb-3" : "h-0 p-0"
          }`}
        >
          {navMenu.map((item, index) => (
            <div
              onClick={() => navigate(`/${item.route}`)}
              key={index}
              className="nav-item py-2 cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
