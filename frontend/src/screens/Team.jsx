import PageHeading from "@/components/PageHeading";
import TeamComponent from "@/components/TeamComponent";
import React, { useEffect, useState } from "react";

const Team = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
      <div className="contact-us min-h-screen w-screen">
        <PageHeading heading="Contact Us" />
        <TeamComponent isMobile={isMobile} />
      </div>
    </>
  );
};

export default Team;
