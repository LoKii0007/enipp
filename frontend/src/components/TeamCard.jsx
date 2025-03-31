import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ theme, item }) => {

  useEffect(() => {
  }, [theme]);
  return (
    <>
      <Link
        to={item.social.linkedin}
        target="_blank"
        className={`team-card relative custom-card flex flex-col items-center justify-center gap-4 md:gap-6 p-5 md:p-8${
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
          <div className="name text-lg md:text-2xl font-bold">{item.name}</div>
          <div className="post md:text-lg opacity-80">{item.title}</div>
        </div>
        <div className="glow-1 z-10 top-[80px]"></div>
      </Link>
    </>
  );
};

export default TeamCard;