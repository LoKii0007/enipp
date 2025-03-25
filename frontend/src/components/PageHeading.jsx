import React from 'react'

const PageHeading = ({heading}) => {
  return (
    <>
      <div className="page-heading w-full h-[200px] bg-[#787878] flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">{heading}</h1>
      </div>
    </>
  )
}

export default PageHeading