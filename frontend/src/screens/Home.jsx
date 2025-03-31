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
          } flex w-full h-[92vh] items-center justify-center `}
        >
          <div className="hero flex w-full max-w-[1440px] h-full items-center relative justify-start px-5 md:px-12 xl:mx-auto overflow-x-hidden">
            <div className="hero-left flex flex-col h-full gap-5 justify-center font-extrabold">
              <div className="uppercase hidden break-words text-left w-full tracking-[0px] md:block md:text-[50px] md:leading-[120%] lg:text-[65px] xl:text-[80px]">
                with <span className="text-enipp-purple1">ENIPP</span> <br />{" "}
                express beyond <br /> reality
              </div>

              {/* mobile  */}
              <div className="uppercase text-[40px] break-words tracking-[0px] text-left w-full md:hidden">
                with <br /> <span className="text-enipp-purple1">ENIPP</span>{" "}
                <br /> express <br />
                beyond <br />
                reality
              </div>
              <div className="text-left w-full text-xs md:text-base">
                Create,Customize & Share Your 3D Experiences with Ease!
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8 text-xs w-full max-w-xl md:text-base">
                <button
                  className={`flex rounded-md shadow-md after:rounded-md w-full justify-center items-center bg-gradient-to-r from-enipp-purple1 to-enipp-purple2 border border-enipp-purple1 text-[#141B22] py-3 tf-button 
               ${
                 theme === "dark"
                   ? "after:!bg-[#040B11] text-white border-white"
                   : "after:!bg-[#ffffff] text-black border-black"
               }
               `}
                >
                  <div className="z-20">Get Started</div>
                </button>
                <Link
                  to="https://calendly.com/kabirsinghpahwa/get-in-touch"
                  target="_blank"
                  className="w-full rounded-md shadow-md after:rounded-md bg-transparent border border-enipp-purple1 after:bg-gradient-to-r after:from-enipp-purple1 after:to-enipp-purple2 py-3 tf-button flex justify-center items-center "
                >
                  <div className="z-20">Speak to us</div>
                </Link>
              </div>
            </div>
            <div className="hero-right flex justify-center items-center w-2/3 h-full md:block absolute -right-[10%]">
              <div className="z-20 h-full w-full flex relative justify-center items-center">
                <Model />
                <div className="glow-2 z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="h-[70px] flex gap-12 w-[calc(100% + 120px)] bg-enipp-purple1 text-2xl marque font-bold overflow-hidden items-center justify-start">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i}>ENIPP</div>
          ))}
        </div> */}

        {/* <NFTCard /> */}

        <div
          className={`flex flex-col w-full gap-[60px] justify-center items-center ${
            theme === "dark"
              ? "bg-[#040B11] text-white"
              : "bg-[#EEEEEE] text-black"
          } py-12`}
        >
          <div className="services flex flex-col gap-12 md:gap-[100px] max-w-[1300px] w-full  ">
            <div className="flex justify-center items-center text-[36px] md:text-[44px]">
              <div className="px-12 w-fit gradient-1 relative overflow-hidden text-center">
                <h2 className="z-20">OUR SERVICES</h2>
                <div className="glow-3 z-10 -top-0 right-0"></div>
                <div className="glow-4 z-10 -bottom-12 left-0"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 justify-center items-center ">
              {services.map((item, index) => (
                <ServiceCard theme={theme} item={item} key={index} />
              ))}
            </div>
          </div>

          <TeamComponent isMobile={isMobile} />
        </div>

        <AboutComponent />

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
