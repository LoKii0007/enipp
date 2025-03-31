import useTheme from "@/hooks/ThemeContex";
import React from "react";

const PageHeading = ({ heading }) => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`page-heading w-full py-8 md:h-[200px] ${
          theme === "dark" ? "bg-enipp-dark" : "bg-enipp-dark"
        } flex justify-center items-center`}
      >
        <h1 className="text-white text-6xl font-bold uppercase">{heading}</h1>
      </div>
    </>
  );
};

export default PageHeading;
