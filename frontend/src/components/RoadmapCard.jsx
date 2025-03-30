import React from "react";

const RoadmapCard = ({ theme, item }) => {
  return (
    <>
      <div
        className={`custom-card p-7 flex justify-center ${
          theme === "dark"
            ? "bg-[#141B22]  text-white"
            : "bg-[#ffffff] text-black"
        } w-full md:w-1/3 flex-col gap-2 `}
      >
        <h1 className="font-[Quicksand] font-extrabold">{item.quarter}</h1>
        {item.tasks.map((task, index) => (
          <h4 className="flex gap-2 items-center" key={index}>
            <img src="/images/enipp-logo.png" className="w-4 h-4 rounded-full" alt="" />
            {task}
          </h4>
        ))}
      </div>
    </>
  );
};

export default RoadmapCard;
