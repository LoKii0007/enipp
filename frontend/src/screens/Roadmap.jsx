
import PageHeading from '@/components/PageHeading'
import RoadmapComponent from '@/components/RoadmapComponent'
import React from 'react'

const Roadmap = () => {
  return (
    <>
      <div className=" min-h-screen w-screen">
          <PageHeading heading="Roadmap" />
          <RoadmapComponent />
      </div>
    </>
  )
}

export default Roadmap