import React from "react";
import RoadmapCard from "./RoadmapCard";
import DashedLine from "./DashedLine";
import { roadmap } from "@/utils/constants";

const Roadmap = ({ theme }) => {
  return (
    <>
      <div
        className={`roadmap px-5 md:px-[15%] w-full flex flex-col gap-5 md:gap-0 items-center justify-center relative`}
      >
        <div className="rd-line absolute w-1 bg-enipp-purple1 h-[calc(100%-177px)] hidden md:block"></div>

        {roadmap.map((item, index) => (
          <div
            className={`w-full flex text-white items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {index % 2 === 0 ? (
              <>
                <RoadmapCard theme={theme} item={item} />
                <DashedLine theme={theme} />
              </>
            ) : (
              <>
                <DashedLine theme={theme} />
                <RoadmapCard theme={theme} item={item} />
              </>
            )}

            <div className="w-[25px] h-[25px] z-20 rounded-full hidden md:block bg-enipp-purple1 absolute left-[calc(50%-12.5px)]"></div>
            <div className="w-[50px] h-[50px] z-10 outer-glow rounded-full hidden md:block bg-enipp-purple1 opacity-30 absolute left-[calc(50%-25px)]"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roadmap;
