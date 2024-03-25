import React from 'react'
import { GrAnnounce } from "react-icons/gr";
import { HiOutlineHeart } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { LiaDotCircle } from "react-icons/lia";

function Recommended({time, type, title, amount, country, job, bgColor, color}) {
  return (
    <div className='w-full rounded-[10px] shadow' style={{borderLeft : `6px solid ${color}`}}>
        <div className='bg-white w-full p-8 rounded-t-[10px]'>

            <span className='flex items-start justify-between'>
                <span className='flex items-start lg:gap-x-8 gap-x-4 lg:text-2xl text-lg'>
                    <button className='p-4 rounded-md border-none outline-none md:mb-0 mb-4'>
                        <GrAnnounce size={30} style={{color: `${color}`}} />
                    </button>
                    <p>Type: {type}</p>
                    <p>Time: {time} years ago</p>
                </span>
                <HiOutlineHeart className='text-2xl' />
            </span>

            <div className='md:pl-24'>
                <p className='text-2xl font-semibold md:mt-0 mt-4'>{title}</p>
                <p className='text-xl pt-4'>Euro {amount} / yearly</p>
            </div>

        </div>

        <div className='py-8 px-6 flex-1 md:flex justify-between rounded-b-[10px] border border-solid border-[#e2e4e7]' style={{backgroundColor: `${bgColor}`}}>
            <div className='flex-1 md:flex items-center gap-x-8 text-2xl'>
                <span className='flex items-center gap-x-3'>
                    <IoLocationOutline className='text-2xl' style={{color: `${color}`}} />
                    <p className='text-xl font-light'>{country}</p>
                </span>
                <span className='flex items-center gap-x-3'>
                    <LiaDotCircle className='text-2xl' style={{color: `${color}`}} />
                    <p className='text-xl font-light'>{job}</p>
                </span>
            </div> 
            <button className='rounded-full bg-white border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn'>Apply Now</button>
        </div>

    </div>
  )
}

export default Recommended