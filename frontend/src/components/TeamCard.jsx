import React from 'react'

const TeamCard = ({theme}) => {
  return (
    <>
      <div className={`team-card custom-card flex flex-col items-center justify-center gap-4 py-8 ${theme === 'dark' ? 'bg-[#141B22] text-white' : 'bg-[#ffffff] text-black'} `}>
        <img className='rounded-full w-[100px] h-[100px]' src="/images/cake.png" alt="" />
        <div className='flex flex-col items-center justify-center gap-1'>
            <div className="name text-xl font-bold">Tony wings</div>
            <div className="post text-xl ">web designer</div>
        </div>
        <div className='flex gap-2 items-center justify-center'>
            <img className="w-4 h-4 " src='/images/cake.png' alt="" />
            <img className="w-4 h-4 " src='/images/cake.png' alt="" />
            <img className="w-4 h-4 " src='/images/cake.png' alt="" />
            <img className="w-4 h-4 " src='/images/cake.png' alt="" />
        </div>
      </div>
    </>
  )
}

export default TeamCard