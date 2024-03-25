import React from 'react'
import { HiOutlineHeart } from 'react-icons/hi'

function Jobs({ type, img, title, color, bg_color }) {
    return (
        <div className='shadow lg-w-[95%] mt-12'>
            <div className='bg-white rounded-t-md px-6 py-8 flex flex-col items-center'>
                <span className='flex items-center justify-between w-full'>
                    <button className='rounded-full bg-transparent text-lg text-black px-8 py-2 outline-none border-none hoverBtn' style={{ border: `3px solid ${color}` }}>
                        {type}
                    </button>
                    <HiOutlineHeart className='text-3xl' />
                </span>
                <img src={img} className='w-28 h-28 rounded-full my-8' alt="" />
            </div>
            <div className='rounded-b-md px-6 py-8' style={{backgroundColor: `${bg_color}`}}>
                <p className='text-2xl font-semibold'>{title}</p>
                <p className='py-2 text-lg'>803 46th St Broolyn, NY</p>
                <div className='pb-4'></div>
                <div className='p-2 border border-solid border-[#e2e4e7]'>
                    <p>Salary</p>
                    <p>Rs. 3,457.000</p>
                </div>
            </div>
        </div>
    )
}

export default Jobs