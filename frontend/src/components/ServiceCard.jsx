import React from "react";

const ServiceCard = ({ theme, item }) => {
  return (
    <>
      <div
        className={`${
          theme === "dark"
            ? "bg-[#141B22] gradient-1 text-white"
            : "bg-[#ffffff] text-black"
        } flex custom-card flex-col items-center justify-center gap-3 p-6 relative overflow-hidden`}
      >
        <img src={item.img} alt="" />
        <h3 className="mb-2 uppercase z-20">{item.title}</h3>
        <p className="card-desc w-full text-center z-20">{item.desc}</p>
        <div className="glow-1 z-10 top-4"></div>
      </div>
    </>
  );
};

export default ServiceCard;
