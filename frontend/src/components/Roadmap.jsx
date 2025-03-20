import React from "react";
import RoadmapCard from "./RoadmapCard";
import DashedLine from "./DashedLine";

const Roadmap = ({theme}) => {
  return (
    <>
      <div className={`roadmap px-5 md:px-[15%] w-full flex flex-col gap-5 md:gap-0 items-center justify-center relative`}>
        <div className="rd-line absolute w-1 bg-emerald-500 h-full hidden md:block"></div>

        <div className="w-full flex justify-start text-white items-center">
          <RoadmapCard theme={theme} />
          <DashedLine theme={theme} />
          <div className="w-[25px] h-[25px] z-20 rounded-full hidden md:block bg-emerald-500 absolute left-[calc(50%-12.5px)]"></div>
          <div className="w-[50px] h-[50px] z-10 rounded-full hidden md:block bg-emerald-500 opacity-30 absolute left-[calc(50%-25px)]"></div>
        </div>
        <div className="w-full flex justify-end text-white items-center">
          <div className="w-[25px] h-[25px] z-20 rounded-full hidden md:block bg-emerald-500 absolute left-[calc(50%-12.5px)]"></div>
          <div className="w-[50px] h-[50px] z-10 rounded-full hidden md:block bg-emerald-500 opacity-30 absolute left-[calc(50%-25px)]"></div>
          <DashedLine theme={theme} />
          <RoadmapCard theme={theme} />
        </div>
        <div className="w-full flex justify-start text-white items-center ">
          <RoadmapCard theme={theme} />
          <DashedLine theme={theme} />
          <div className="w-[25px] h-[25px] z-20 rounded-full hidden md:block bg-emerald-500 absolute left-[calc(50%-12.5px)]"></div>
          <div className="w-[50px] h-[50px] z-10 rounded-full hidden md:block bg-emerald-500 opacity-30 absolute left-[calc(50%-25px)]"></div>
        </div>
        <div className="w-full flex justify-end text-white items-center">
          <div className="w-[25px] h-[25px] z-20 rounded-full hidden md:block bg-emerald-500 absolute left-[calc(50%-12.5px)]"></div>
          <div className="w-[50px] h-[50px] z-10 rounded-full hidden md:block bg-emerald-500 opacity-30 absolute left-[calc(50%-25px)]"></div>
          <DashedLine theme={theme} />
          <RoadmapCard theme={theme} />
        </div>
        <div className="w-full flex justify-start text-white items-center ">
          <RoadmapCard theme={theme} />
          <DashedLine theme={theme} />
          <div className="w-[25px] h-[25px] z-20 rounded-full hidden md:block bg-emerald-500 absolute left-[calc(50%-12.5px)]"></div>
          <div className="w-[50px] h-[50px] z-10 rounded-full hidden md:block bg-emerald-500 opacity-30 absolute left-[calc(50%-25px)]"></div>
        </div>
        <div className="w-full flex justify-end text-white items-center">
          <div className="w-[25px] h-[25px] z-20 rounded-full hidden md:block bg-emerald-500 absolute left-[calc(50%-12.5px)]"></div>
          <div className="w-[50px] h-[50px] z-10 rounded-full hidden md:block bg-emerald-500 opacity-30 absolute left-[calc(50%-25px)]"></div>
          <DashedLine theme={theme} />
          <RoadmapCard theme={theme} />
        </div>
        <div className="w-full flex justify-start text-white items-center ">
          <RoadmapCard theme={theme} />
          <DashedLine theme={theme} />
          <div className="w-[25px] h-[25px] z-20 rounded-full hidden md:block bg-emerald-500 absolute left-[calc(50%-12.5px)]"></div>
          <div className="w-[50px] h-[50px] z-10 rounded-full hidden md:block bg-emerald-500 opacity-30 absolute left-[calc(50%-25px)]"></div>
        </div>
        <div className="w-full flex justify-end text-white items-center">
          <div className="w-[25px] h-[25px] z-20 rounded-full hidden md:block bg-emerald-500 absolute left-[calc(50%-12.5px)]"></div>
          <div className="w-[50px] h-[50px] z-10 rounded-full hidden md:block bg-emerald-500 opacity-30 absolute left-[calc(50%-25px)]"></div>
          <DashedLine theme={theme} />
          <RoadmapCard theme={theme} />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
