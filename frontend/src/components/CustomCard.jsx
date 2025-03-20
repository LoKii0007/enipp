import React from 'react'

const CustomCard = () => {
  return (
    <div className="card bg-blue-300 h-[27vw] w-[17vw] relative">
      <div className="bottom-border-1 opacity-0 h-1 w-12 bg-green-400 "></div>
      <div className="bottom-border-2 opacity-0 w-1 h-12 bg-green-400"></div>
      <div className="top-border-2 opacity-0 absolute h-1 bottom-0 right-0 w-12 bg-green-400"></div>
      <div className="top-border-2 opacity-0 absolute w-1 h-12 bottom-0 right-0 bg-green-400"></div>
    </div>
  )
}

export default CustomCard