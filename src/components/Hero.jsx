import React from 'react'
import { HiSearch } from 'react-icons/hi'
import { IoLocationOutline } from "react-icons/io5";


function Hero() {
    return (
        <div className='bg-[#fafbfc]'>
            <div className='flex flex-col items-center justify-center min-h-[60vh] py-8 px-8'>

                <h1 className='xl:text-7xl lx:text-5xl sm:text-3xl text-2xl lg:leading-normal font-bold text-center'>
                    Find your {" "}
                    <span className='bg-indigo-700 text-white whitespace-pre'>
                        dream jobs
                    </span>{" "}
                    in <br /> New Castle
                </h1>
                <p className='text-2xl lg:w-1/2 text-center leading-10 my-8'>
                    When you are searching for a job, there are a few thins you can do to get the most out your search
                </p>
                <div className='flex items-center border-2 border-solid border-indigo-700 rounded-full h-16 lg:w-2/5 w-full py-2 relative mt-4'>
                    <input type="text"
                        placeholder='Job title or keyword'
                        className='bg-transparent h-full w-full border-none outline-none absolute px-20 xl:text-2xl text-base '
                    />
                    <button className='flex justify-center items-center bg-indigo-700 rounded-full text-white w-12 h-12 absolute left-2 border-none'>
                        <HiSearch className='text-2xl' />
                    </button>
                    <button className='flex items-center bg-[#f3f3f4] absolute right-2 rounded-full lg:px-4 px-2 h-[90%] xl:text-xl text-sm font-normal gap-x-2 border-none'>
                        <IoLocationOutline className='text-black lg:text-2xl' size={25} />
                        <span className='hidden md:block'>Any location</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Hero