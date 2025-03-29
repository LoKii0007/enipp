import React from "react";
import AboutCard from "./AboutCard";
import useTheme from "@/hooks/ThemeContex";
import { thumnails } from "@/utils/constants";

const AboutComponent = () => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`about-us pt-12 min-h-screen ${
          theme === "dark"
            ? "bg-[#040B11] text-white"
            : "bg-[#EEEEEE] text-black"
        } flex flex-col gap-[80px] items-center justify-center w-full `}
      >
        <div className="about-top flex flex-col gap-5 items-center justify-center p-5 md:p-0 max-w-[1300px] w-full">
          <h1 className=" text-[36px] md:text-[44px] font-bold">ABOUT US</h1>
          <h5 className=" text-sm md:text-[18px] text-center px-5 w-full md:px-10 lg:w-1/2">
            At Enipp, we transform ideas into vibrant realities by blending
            innovative thinking with artistic expression. We empower users to
            forge memorable connections that bridge digital and physical realms,
            fuelling growth and strengthening brand identity. With a commitment
            to quality and visionary design, Enipp is your partner in turning your 
            imagination into a shareable experience.
          </h5>
          <div className=" w-full flex px-5 items-center justify-between md:justify-center md:gap-12 mt-4">
            <div className="flex flex-col text-center gap-2">
              <div className="text-xl font-bold">Total experiences</div>
              <div className="text-4xl md:text-[56px] font-sans font-bold">
                5+
              </div>
            </div>
            <div className="flex flex-col text-center gap-2">
              <div className="text-xl font-bold">Total assets</div>
              <div className="text-4xl md:text-[56px] font-sans font-bold">
                10+
              </div>
            </div>
          </div>
        </div>

        <div className="about-bottom grid grid-cols-1 px-5 gap-5 md:gap-8 md:grid-cols-2 max-w-[1300px] w-full">
          {thumnails.map((item, index) => (
            <AboutCard item={item} theme={theme} key={index} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
