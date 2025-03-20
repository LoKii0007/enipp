import React from "react";

const RoadmapCard = ({ theme }) => {
  return (
    <>
      <div
        className={`custom-card p-7 flex justify-center ${
          theme === "dark"
            ? "bg-[#141B22]  text-white"
            : "bg-[#ffffff] text-black"
        } w-full md:w-1/3 flex-col gap-2 `}
      >
        <h1>Heading</h1>
        <h4 className="flex gap-2">
          <img src="/images/enipp-logo.png" className="w-4" alt="" />
          subtitle
        </h4>
        <h4 className="flex gap-2">
          <img src="/images/enipp-logo.png" className="w-4" alt="" />
          subtitle
        </h4>
        <h4 className="flex gap-2">
          <img src="/images/enipp-logo.png" className="w-4" alt="" />
          subtitle
        </h4>
      </div>
    </>
  );
};

export default RoadmapCard;
