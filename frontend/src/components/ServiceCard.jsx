import React from "react";

const ServiceCard = ({ theme, item }) => {
  return (
    <>
      <div
        className={`${
          theme === "dark"
            ? "bg-[#141B22] text-white"
            : "bg-[#ffffff] text-black"
        } flex custom-card flex-col items-center justify-center gap-3 p-6`}
      >
        <img src={item.img} alt="" />
        <h3 className="mb-2 uppercase ">{item.title}</h3>
        <p className="card-desc w-full text-center">{item.desc}</p>
      </div>
    </>
  );
};

export default ServiceCard;
