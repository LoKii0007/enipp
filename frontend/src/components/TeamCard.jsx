import React, { useEffect } from "react";

const TeamCard = ({ theme, item }) => {

  useEffect(() => {
  }, [theme]);
  return (
    <>
      <div
        className={`team-card relative custom-card flex flex-col items-center justify-center gap-4 py-8 ${
          theme === "dark"
            ? "bg-[#141B22] text-white gradient-1"
            : "bg-[#ffffff] text-black"
        } overflow-hidden`}
      >
        <img
          className="rounded-full w-[100px] h-[100px] z-20"
          src={item.img}
          alt=""
        />
        <div className="flex flex-col items-center justify-center gap-1 z-20">
          <div className="name text-xl font-bold">{item.name}</div>
          <div className="post text-xl ">{item.title}</div>
        </div>
        <div className="glow-1 z-10 top-[80px]"></div>
      </div>
    </>
  );
};

export default TeamCard;