import useTheme from "@/hooks/ThemeContex";
import React from "react";

const NFTCard = () => {
    const {theme} = useTheme()
  return (
    <div className={`flex items-center justify-center min-h-screen w-full ${
        theme === "dark"
          ? "bg-enipp-dark1  text-white"
          : "bg-[#EEEEEE] text-black"
      } `}>
      <div className=" w-full grid grid-cols-2 gap-12 justify-center items-center px-[15%]">
        {/* Left Side - Image */}
        <div className="relative w-full h-full">
          <img
            src="/images/item-details.jpg"
            alt="NFT"
            className="w-full h-full object-cover rounded-lg"
          />
          <div style={{borderRadius:'20px'}} className="absolute bottom-4 left-4 right-4 backdrop-blur-md text-white p-3 ">
            <p className="text-sm font-semibold text-center mb-2">PUBLIC END IN</p>
            <div className=" text-lg font-bold grid grid-cols-4 gap-4">
              <div className="flex flex-col text-center">
                <span className="font-sans " >19</span>
                Days
              </div>
              <div className="flex flex-col text-center">
                <span className="font-sans" >19</span>
                hours
              </div>
              <div className="flex flex-col text-center">
                <span className="font-sans" >19</span>
                minutes
              </div>
              <div className="flex flex-col text-center">
                <span className="font-sans" >19</span>
                seconds
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col justify-between w-full gap-6 h-fit">
          <h2 className="text-2xl font-bold">SKISIRS</h2>
          <p className={` ${theme === 'dark' ? ' text-[#ffffffc8]' : ' text-zinc-600'} text-sm max-w-md`}>
            As the first hero of the Neoh Universe, collection has over 9,999 unique skins drawn from different missions and challenges he faced throughout his life.
          </p>

          {/* Attributes */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className={`p-3 ${theme === 'dark' ? 'bg-[#141B22] text-white' : 'bg-[#ffffff] text-black'} font-semibold`}><span className="font-normal">Clothing</span> <br /> SNAKE</div>
            <div className={`p-3 ${theme === 'dark' ? 'bg-[#141B22] text-white' : 'bg-[#ffffff] text-black'} font-semibold`}><span className="font-normal">Eyes</span> <br /> MIX</div>
            <div className={`p-3 ${theme === 'dark' ? 'bg-[#141B22] text-white' : 'bg-[#ffffff] text-black'} font-semibold`}><span className="font-normal">Face</span> <br /> GREEN</div>
            <div className={`p-3 ${theme === 'dark' ? 'bg-[#141B22] text-white' : 'bg-[#ffffff] text-black'} font-semibold`}><span className="font-normal">Skin</span> <br /> GREEN</div>
            <div className={`p-3 ${theme === 'dark' ? 'bg-[#141B22] text-white' : 'bg-[#ffffff] text-black'} font-semibold`}><span className="font-normal">Background</span> <br /> GREEN LIGHT</div>
            <div className={`p-3 ${theme === 'dark' ? 'bg-[#141B22] text-white' : 'bg-[#ffffff] text-black'} font-semibold`}><span className="font-normal">Special</span> <br /> CAT</div>
          </div>

          {/* Price */}
          <p className="text-lg font-bold mt-4">
            PRICE: <span className="text-green-500"> <span className="font-sans">0.15</span> ETH</span>
          </p>

          {/* Buttons */}
          <div className="mt-4 space-y-4">
            <button className={`w-full tf-button ${theme === 'dark' ? ' text-[#ffffffc8]' : ' text-zinc-600'} border border-[#21E786] bg-[#21E786] hover:after:bg-enipp-purple1 font-semibold py-2 flex justify-center items-center`}>
            <div className="z-20">BUY ON OPENSEA</div>
            </button>
            <div className="flex gap-4 mt-2">
              <button className={`flex-1 ${theme === 'dark' ? ' text-[#ffffffc8] border-gray-300' : ' text-black border-black'} border py-2 tf-button flex items-center justify-center gap-2 font-semibold`}>
                <div className="z-20">JOIN DISCORD</div>
              </button>
              <button className={`flex-1 ${theme === 'dark' ? ' text-[#ffffffc8] border-gray-300' : ' text-black border-black'} border py-2 tf-button flex items-center justify-center gap-2 font-semibold`}>
              <div className="z-20">INSTAGRAM</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
