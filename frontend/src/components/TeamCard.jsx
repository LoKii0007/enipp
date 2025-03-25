import React, { useEffect } from "react";

const TeamCard = ({ theme, item }) => {

  useEffect(() => {
  }, [theme]);
  return (
    <>
      <div
        className={`team-card custom-card flex flex-col items-center justify-center gap-4 py-8 ${
          theme === "dark"
            ? "bg-[#141B22] text-white"
            : "bg-[#ffffff] text-black"
        } `}
      >
        <img
          className="rounded-full w-[100px] h-[100px]"
          src={item.img}
          alt=""
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="name text-xl font-bold">{item.name}</div>
          <div className="post text-xl ">{item.title}</div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;