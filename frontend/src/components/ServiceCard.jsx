import React from "react";

const ServiceCard = ({ theme, item }) => {
  return (
    <>
      <div
        className={`${
          theme === "dark"
            ? "bg-[#141B22] gradient-1 text-white"
            : "bg-[#ffffff] text-black"
        } flex custom-card flex-col items-center gap-3 md:gap-5 h-full p-6 md:p-8 relative overflow-hidden`}
      >
        <h3 className="uppercase z-20 font-extrabold md:text-xl overflow-hidden whitespace-nowrap xl:text-3xl">{item.title}</h3>
        <p className="w-full text-center font-[Quicksand] z-20 text-xs md:text-sm">{item.desc}</p>
        <div className="glow-1 z-10 top-4"></div>
      </div>
    </>
  );
};

export default ServiceCard;
