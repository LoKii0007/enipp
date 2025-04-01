import React from "react";
import AboutCard from "./AboutCard";
import useTheme from "@/hooks/ThemeContex";
import { thumnails } from "@/utils/constants";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const AboutComponent = () => {
  const { theme, isMobile } = useTheme();

  return (
    <>
      <div
        className={`about-us md:pt-12 md:min-h-screen ${
          theme === "dark"
            ? "bg-enipp-dark1 text-white"
            : "bg-[#EEEEEE] text-black"
        } flex flex-col pb-8 gap-8 md:gap-[100px] items-center justify-center w-full`}
      >
        <div className="about-top flex flex-col gap-5 relative items-center justify-center p-5 md:p-0 max-w-[1200px] w-full">
          <h1 className=" text-[36px] md:text-6xl font-extrabold md:mb-[30px] z-30">
            ABOUT US
          </h1>
          <h5 className=" text-xs md:text-[18px] font-[Quicksand] z-30 text-center px-5 w-full md:px-10 md:text-xl xl:px-12">
            At Enipp, we transform ideas into vibrant realities by blending
            innovative thinking with artistic expression. We empower users to
            forge memorable connections that bridge digital and physical realms,
            fuelling growth and strengthening brand identity. With a commitment
            to quality and visionary design, Enipp is your partner in turning
            your imagination into a shareable experience.
          </h5>
          <div className=" w-full flex px-5 items-center justify-between md:justify-center md:mt-10 md:gap-12 mt-4">
            <div className="flex flex-col text-center gap-2">
              <div className="text-xl font-bold md:text-2xl">
                Total experiences
              </div>
              <div className="text-4xl md:text-[56px] font-sans font-bold">
                5+
              </div>
            </div>
            <div className="flex flex-col text-center gap-2">
              <div className="text-xl font-bold md:text-2xl">Total assets</div>
              <div className="text-4xl md:text-[56px] font-sans font-bold">
                10+
              </div>
            </div>
          </div>
          <div className="glow-6 z-[1] top-0 left-0"></div>
        </div>

        <div className="category text-[36px] z-20 md:text-[44px] md:mb-[30px] font-bold flex flex-col items-center justify-center gap-12 w-full">
          <div className="text-center md:text-6xl font-extrabold">
            CATEGORIES
          </div>
          <div className="w-full hidden md:flex justify-center items-center">
            <div className="about-bottom grid grid-cols-1 px-5 gap-5 z-20 md:gap-12 md:grid-cols-2 max-w-[1000px] w-full">
              {thumnails.map((item, index) => (
                <AboutCard
                  item={item}
                  theme={theme}
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </div>
          <div className="md:hidden w-full px-5">
            <Splide
              hasTrack={false}
              options={{
                type: "loop",
                perMove: 1,
                perPage: 1,
                gap: "48px",
                pagination: false,
                autoplay: true,
              }}
              aria-label="..."
            >
              <SplideTrack
                options={{ focus: "center" }}
                className=" w-[calc(100%-100px)] mx-auto"
              >
                {thumnails.map((item, index) => (
                  <SplideSlide key={index} className="">
                    <AboutCard theme={theme} item={item} index={index} />
                  </SplideSlide>
                ))}
              </SplideTrack>

              <div className="splide__arrows md:block z-30">
                <button className="splide__arrow splide__arrow--prev !rounded-none !h-7 !w-7 border !left-1 !opacity-100 !bg-enipp-purple1 !bg-gradient-to-r !from-enipp-purple1 !to-enipp-purple2">
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
                <button className="splide__arrow splide__arrow--next !rounded-none !h-7 !w-7 border !right-1 !opacity-100 !bg-enipp-purple1 !bg-gradient-to-r !from-enipp-purple1 !to-enipp-purple2">
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
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
