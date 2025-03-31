import PageHeading from "@/components/PageHeading";
import TeamComponent from "@/components/TeamComponent";
import React, { useEffect, useState } from "react";
import useTheme from "@/hooks/ThemeContex"; 

const Team = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { theme } = useTheme();
  function responsive() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", responsive);

    return () => {
      window.removeEventListener("resize", responsive);
    };
  }, []);

  
  return (
    <>
      <div className="contact-us w-full">
        {/* <PageHeading heading="Our Team" /> */}
        <div className={`flex justify-center items-center w-full py-12 ${theme === 'dark' ? 'bg-enipp-dark1' : 'bg-[#EEEEEE]'}`}> 
          <TeamComponent isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default Team;
