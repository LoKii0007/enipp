import React from "react";
import Roadmap from "./Roadmap";
import useTheme from "@/hooks/ThemeContex";

const RoadmapComponent = () => {
  const { theme } = useTheme()
  return (
    <>
      <div
        className={`${
          theme === "dark"
            ? "bg-enipp-dark1 text-white"
            : "bg-[#EEEEEE] text-black"
        } w-full py-12 md:py-[100px] flex flex-col gap-8 md:gap-[60px] relative`}
      >
        <div className="glow-6 z-10 top-0 right-0"></div>
        <h1 className="text-4xl w-full z-20 text-center font-extrabold md:text-6xl">ROADMAP <br /> <span className=" text-2xl font-bold md:text-4xl">2025</span></h1>
        <Roadmap theme={theme} />
      </div>
    </>
  );
};

export default RoadmapComponent;
