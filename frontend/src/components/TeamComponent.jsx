import useTheme from "@/hooks/ThemeContex";
import React from "react";
import TeamCard from "./TeamCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { team } from "@/utils/constants";

const TeamComponent = () => {
  const { theme, perPage, isMobile } = useTheme();

  return (
    <>
      <div
        className={`${
          theme === "dark"
            ? "bg-enipp-dark1 text-white"
            : "bg-[#EEEEEE] text-black"
        } team relative flex flex-col gap-8 px-5 pt-12 md:gap-[60px] md:px-[15%] w-full justify-center`}
      >
        <div className="glow-6 z-[1] top-0 right-0"></div>

        <h2 className="text-center text-[36px] z-30 font-extrabold md:text-6xl">
          OUR TEAM
        </h2>
        <Splide
          hasTrack={false}
          options={{
            type: "loop",
            perMove: 1,
            perPage: perPage,
            gap: "48px",
            pagination: false,
            autoplay: true,
          }}
          aria-label="..."
        >
          <SplideTrack
            options={{ focus: "center" }}
            className=" w-[calc(100%-100px)] md:w-full mx-auto"
          >
            {team.map((item, index) => (
              <SplideSlide key={index} className="">
                <TeamCard theme={theme} item={item} />
              </SplideSlide>
            ))}
          </SplideTrack>

          <div className="splide__arrows md:block z-30">
            <button className="splide__arrow splide__arrow--prev !rounded-none !h-7 !w-7 md:!w-12 md:!h-12 border !left-1 md:!left-[-60px] !opacity-100 !bg-enipp-purple1 !bg-gradient-to-r !from-enipp-purple1 !to-enipp-purple2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={isMobile ? "16" : "24"}
                height={isMobile ? "16" : "24"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left"
              >
                <path fill="none" d="m9 18 6-6-6-6" />
              </svg>
            </button>
            <button className="splide__arrow splide__arrow--next !rounded-none !h-7 !w-7 md:!w-12 md:!h-12 border !right-1 md:!right-[-60px] !opacity-100 !bg-enipp-purple1 !bg-gradient-to-r !from-enipp-purple1 !to-enipp-purple2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={isMobile ? "16" : "24"}
                height={isMobile ? "16" : "24"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path fill="none" d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </Splide>
      </div>
    </>
  );
};

export default TeamComponent;
