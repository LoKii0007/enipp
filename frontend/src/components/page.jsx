import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/ThemeContex";
import FaqCard from "./FaqCard";
import TeamComponent from "./TeamComponent";
import AboutComponent from "./AboutComponent";
import RoadmapComponent from "./RoadmapComponent";
import NFTCard from "./ItemDrop";

const Page = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { theme, setTheme } = useTheme();

  function responsive() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", responsive);

    return () => {
      window.removeEventListener("resize", responsive);
    };
  }, []);

  return (
    <>
      <div className=" flex flex-col w-full bg-[#787878] items-center m-0 p-0 overflow-hidden">
        <div className=" flex w-full h-[92vh] p-5 items-center justify-between text-white md:px-12 xl:px-[15%] ">
          <div className="hero-left flex flex-col h-full gap-5 items-center justify-center">
            <div className="uppercase hidden break-words  tracking-widest text-left w-full md:block md:text-[80px] md:leading-[120%]">
              with <span className="text-[#21E378]">ENIPP</span> <br /> create
              ar/vr <br /> experiences
            </div>
            <div className="uppercase text-[40px] break-words  tracking-widest text-left w-full md:hidden">
              with <br /> <span className="text-[#21E378]">ENIPP</span> <br />{" "}
              create <br />
              ar/vr <br /> experiences
            </div>
            <div className="text-left w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              cumque!
            </div>
            <div className="mt-10 w-full flex justify-start gap-8 ">
              <button className="bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-[#141B22] px-8 py-3 tf-button after:!bg-[#787878] flex justify-center items-center ">
                <div className="z-20">Get Started</div>
              </button>
              <button className="bg-transparent border border-enipp-purple1 px-8 py-3 tf-button flex justify-center items-center ">
                <div className="z-20">Get Started</div>
              </button>
            </div>
          </div>
          <div className="hero-right hidden w-[33%] h-[70vh] bg-gray-300 md:block "></div>
        </div>

        <div className="h-[70px] flex gap-12 w-[calc(100% + 120px)] bg-[#21E378] text-2xl marque font-bold overflow-hidden items-center justify-start">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i}>ENIPP</div>
          ))}
        </div>

        {/* <NFTCard /> */}

        <AboutComponent />

        <div
          className={`flex flex-col w-full gap-[60px] justify-center items-center ${
            theme === "dark"
              ? "bg-[#040B11] text-white"
              : "bg-[#EEEEEE] text-black"
          } py-12`}
        >
          <div className="services flex flex-col gap-12 px-5 nd:px-[15%] w-full  ">
            <h2 className="text-center text-[36px] md:text-[44px]">
              OUR SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-center items-center ">
              <div
                className={`${
                  theme === "dark"
                    ? "bg-[#141B22] text-white"
                    : "bg-[#ffffff] text-black"
                } flex custom-card flex-col items-center justify-center gap-3 p-6`}
              >
                <img src="" alt="" />
                <h3 className="mb-2">heading</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  vero harum dicta sint quaerat dolore?
                </p>
              </div>
              <div
                className={`${
                  theme === "dark"
                    ? "bg-[#141B22] text-white"
                    : "bg-[#ffffff] text-black"
                } flex custom-card flex-col items-center justify-center gap-3 p-6`}
              >
                <img src="" alt="" />
                <h3 className="mb-2">heading</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  vero harum dicta sint quaerat dolore?
                </p>
              </div>
              <div
                className={`${
                  theme === "dark"
                    ? "bg-[#141B22] text-white"
                    : "bg-[#ffffff] text-black"
                } flex custom-card flex-col items-center justify-center gap-3 p-6`}
              >
                <img src="" alt="" />
                <h3 className="mb-2">heading</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  vero harum dicta sint quaerat dolore?
                </p>
              </div>
              <div
                className={`${
                  theme === "dark"
                    ? "bg-[#141B22] text-white"
                    : "bg-[#ffffff] text-black"
                } flex custom-card flex-col items-center justify-center gap-3 p-6`}
              >
                <img src="" alt="" />
                <h3 className="mb-2">heading</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                  vero harum dicta sint quaerat dolore?
                </p>
              </div>
            </div>
          </div>

          <TeamComponent isMobile={isMobile} />
        </div>

        <RoadmapComponent />

        <div
          className={`${
            theme === "dark"
              ? "bg-[#040B11] text-white"
              : "bg-[#EEEEEE] text-black"
          } w-full py-12 md:py-[100px] flex flex-col gap-[60px] `}
        >
          <h1 className="text-4xl md:text-[44px] w-full text-center">FAQ</h1>
          <div className="px-5 grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 md:px-[15%]">
            <FaqCard theme={theme} />
            <FaqCard theme={theme} />
            <FaqCard theme={theme} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
