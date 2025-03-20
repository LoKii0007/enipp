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
            ? "bg-[#040B11] text-white"
            : "bg-[#EEEEEE] text-black"
        } w-full py-12 md:py-[100px] flex flex-col gap-[60px] `}
      >
        <h1 className="text-4xl w-full text-center">ROADMAP</h1>
        <Roadmap theme={theme} />
      </div>
    </>
  );
};

export default RoadmapComponent;
