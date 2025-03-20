import React from 'react'

const DashedLine = ({theme}) => {
  return (
    <div className='w-1/6 grid-cols-8 gap-2 hidden md:grid overflow-hidden ' >
        <div className={`h-[1px] w-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-400'} `} ></div>
        <div className={`h-[1px] w-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-400'} `} ></div>
        <div className={`h-[1px] w-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-400'} `} ></div>
        <div className={`h-[1px] w-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-400'} `} ></div>
        <div className={`h-[1px] w-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-400'} `} ></div>
        <div className={`h-[1px] w-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-400'} `} ></div>
        <div className={`h-[1px] w-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-400'} `} ></div>
        <div className={`h-[1px] w-full ${theme === 'dark' ? 'bg-white' : 'bg-gray-400'} `} ></div>
    </div>
  )
}

export default DashedLine