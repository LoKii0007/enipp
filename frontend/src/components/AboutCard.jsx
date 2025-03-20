import React from "react";

const AboutCard = ({theme}) => {
  return (
    <>
      <div className={`about-card custom-card cursor-pointer ${theme === 'dark' ? 'bg-[#141B22] text-white' : 'bg-[#ffffff] text-black'} p-6 justify-center items-center flex flex-col gap-6  relative md:p-12 `}>
        <div className="pt-12 text-center relative justify-center flex ">
          <div className="text-[80px] text-[#21E786] bottom-1 font-sans leading-none absolute z-10 opacity-30 text-effect font-bold">01</div>
          <span className="z-20 font-bold text-2xl ">HIGH QUALITY</span>
        </div>
        <div className="text-center text-[18px] text-[#8D8F93] " >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
          voluptas!
        </div>
      </div>
    </>
  );
};

export default AboutCard;
