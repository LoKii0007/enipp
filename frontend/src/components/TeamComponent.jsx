import useTheme from "@/hooks/ThemeContex";
import React from "react";
import TeamCard from "./TeamCard";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { team } from "@/utils/constants";

const TeamComponent = ({ isMobile }) => {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`${
          theme === "dark"
            ? "bg-enipp-dark1 text-white"
            : "bg-[#EEEEEE] text-black"
        } team relative flex flex-col gap-8 px-5 pt-12 md:gap-[60px] md:px-[15%] w-full justify-center`}
      >
          <div className="glow-6 z-10 top-0 right-0"></div>

        <h2 className="text-center z-20 text-[36px] font-extrabold md:text-6xl">OUR TEAM</h2>
        <Splide
          hasTrack={false}
          options={{
            type: "loop",
            perMove: 1,
            perPage: isMobile ? 1 : 4,
            gap: "48px",
            pagination: false,
            autoplay: true,
          }}
          aria-label="..."
        >
          <SplideTrack options={{ focus: "center" }} className="w-full">
            {team.map((item, index) => (
              <SplideSlide key={index}>
                <TeamCard theme={theme} item={item} />
              </SplideSlide>
            ))}
          </SplideTrack>

          <div className="splide__arrows hidden md:block">
            <button className="splide__arrow splide__arrow--prev !rounded-none !w-12 !h-12 border !left-[-60px] !opacity-100 !bg-enipp-purple1 !bg-gradient-to-r !from-enipp-purple1 !to-enipp-purple2">
              <div className="rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-left"
                >
                  <path fill="none" d="m15 18-6-6 6-6" />
                </svg>
              </div>
            </button>
            <button className="splide__arrow splide__arrow--next !rounded-none !w-12 !h-12 border !right-[-60px] !opacity-100 !bg-enipp-purple1 !bg-gradient-to-r !from-enipp-purple1 !to-enipp-purple2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
