import React from 'react'
import Categories from './Categories'

function Recomended_jobs() {
    return (
        <div className='bg-[#f5f6fc]'>
            <div className='container mx-auto px-6 py-24'>

                <div className='md:flex items-center justify-between'>
                    <h2 className='xl:text-5xl lg:text-3xl text-2xl font-semibold'>
                        Recomended jobs
                    </h2>
                    <span className='md:flex gap-x-4'>
                        <button className='rounded-full md:my-0 my-4 bg-indigo-700 text-lg text-white font-bold px-8 py-3 ouutline-none border-none hoverBtn'>Latest Job</button>
                        <button className='rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn'>Premium Job</button>
                    </span>
                </div>

                <p className='text-2xl mt-4 font-light'>Explore suggested job searches</p>

                <div>
                    <div>
                        <div>
                            <h2>Job Categories</h2>
                        </div>
                        <div>
                            <Categories image="/bus_icon.webp" opening={3} title="Automotive" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recomended_jobs