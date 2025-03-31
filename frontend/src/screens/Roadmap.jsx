
import PageHeading from '@/components/PageHeading'
import RoadmapComponent from '@/components/RoadmapComponent'
import React from 'react'
import useTheme from '@/hooks/ThemeContex';

const Roadmap = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className=" min-h-screen w-full">
          {/* <PageHeading heading="Roadmap" /> */}
          <div className={`flex justify-center items-center w-full py-12 ${theme === 'dark' ? 'bg-enipp-dark1' : 'bg-[#EEEEEE]'}`}>
            <RoadmapComponent />
          </div>
      </div>
    </>
  )
}

export default Roadmap