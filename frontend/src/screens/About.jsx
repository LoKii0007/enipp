
import AboutComponent from '@/components/AboutComponent'
import PageHeading from '@/components/PageHeading'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="contact-us min-h-screen w-screen">
          <PageHeading heading="About Us" />
          <AboutComponent/>
      </div>
    </>
  )
}

export default About