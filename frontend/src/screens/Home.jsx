import React, { useState, useEffect } from "react";
import useTheme from "@/hooks/ThemeContex";
import FaqCard from "@/components/FaqCard";
import TeamComponent from "@/components/TeamComponent";
import AboutComponent from "@/components/AboutComponent";
import RoadmapComponent from "@/components/RoadmapComponent";
import NFTCard from "@/components/ItemDrop";
import ServiceCard from "@/components/ServiceCard";
import { services, faq } from "@/utils/constants";
import Model from "@/components/Model";
import { Link } from "react-router-dom";

const Home = () => {
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
      <div className=" flex flex-col w-full items-center m-0 p-0 overflow-hidden">
        <div
          className={`${
            theme === "dark"
              ? "bg-[#040B11] text-white"
              : "bg-[#EEEEEE] text-black"
          } flex w-full h-[92vh] items-center justify-start md:px-12 xl:px-12 overflow-x-hidden `}
        >
          <div className="hero-left flex flex-col h-full gap-5 items-center justify-center font-extrabold">
            <div className="uppercase hidden break-words  tracking-widest text-left w-full md:block md:text-[80px] md:leading-[120%] word-spacing-[0px] letter-spacing-[-10px]">
              with <span className="text-enipp-purple1">ENIPP</span> <br />{" "}
              express beyond <br /> reality
            </div>
            <div className="uppercase text-[40px] break-words  tracking-widest text-left w-full md:hidden">
              with <br /> <span className="text-enipp-purple1">ENIPP</span>{" "}
              <br /> create <br />
              ar/vr <br /> experiences
            </div>
            <div className="text-left w-full">
              Create,Customize & Share Your 3D Experiences with Ease!
            </div>
            <div className="mt-10 w-full flex justify-start gap-8 ">
              <button
                className={`flex justify-center items-center bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-[#141B22] px-8 py-3 tf-button 
               ${
                 theme === "dark"
                   ? "after:!bg-[#040B11] text-white border-white"
                   : "after:!bg-[#ffffff] text-black border-black"
               }
               rounded-none`}
              >
                <div className="z-20">Get Started</div>
              </button>
              <Link
                to="https://calendly.com/kabirsinghpahwa/get-in-touch"
                target="_blank"
                className="bg-transparent border border-enipp-purple1 after:bg-gradient-to-r after:from-enipp-purple1 after:to-enipp-purple2 px-8 py-3 tf-button flex justify-center items-center "
              >
                <div className="z-20">Speak to us</div>
              </Link>
            </div>
          </div>
          <div className="hero-right hidden w-1/2 h-full md:block absolute right-0 ">
            <Model />
          </div>
        </div>

        <div className="h-[70px] flex gap-12 w-[calc(100% + 120px)] bg-enipp-purple1 text-2xl marque font-bold overflow-hidden items-center justify-start">
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
          <div className="services flex flex-col gap-12 max-w-[1300px] w-full  ">
            <h2 className="text-center text-[36px] md:text-[44px]">
              OUR SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-center items-center ">
              {services.map((item, index) => (
                <ServiceCard theme={theme} item={item} key={index} />
              ))}
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
          } w-full py-12 md:py-[100px] flex justify-center items-center `}
        >
          <div className="flex flex-col max-w-[1300px] w-full gap-[60px] ">
            <h1 className="text-4xl md:text-[44px] w-full text-center">FAQ</h1>
            <div className="px-5 grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 md:px-[15%]">
              {faq.map((item, index) => (
                <FaqCard theme={theme} item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
