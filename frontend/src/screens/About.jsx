import AboutComponent from "@/components/AboutComponent";
import PageHeading from "@/components/PageHeading";
import React from "react";
import useTheme from "@/hooks/ThemeContex";

const About = () => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`contact-us min-h-[calc(100vh-408.89px)] w-full ${
          theme === "dark" ? "bg-enipp-dark1" : "bg-[#EEEEEE]"
        }`}
      >
        {/* <PageHeading heading="About Us" /> */}
        <div
          className={`flex justify-center items-center w-full pt-7 pb-12 ${
            theme === "dark" ? "bg-enipp-dark1" : "bg-[#EEEEEE]"
          }`}
        >
          <AboutComponent />
        </div>
      </div>
    </>
  );
};

export default About;
