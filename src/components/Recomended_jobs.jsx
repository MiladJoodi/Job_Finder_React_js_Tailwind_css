import React from 'react'
import Categories from './Categories'
import Recommended from './Recommended'

const data = [
    {
        id: 1,
        image: "/bus_icon.webp",
        title: "Automotive",
        opening: 3
    },

    {
        id: 2,
        image: "/health.png",
        title: "Health",
        opening: 3
    },

    {
        id: 3,
        image: "/arch.png",
        title: "Architect",
        opening: 3
    },

    {
        id: 4,
        image: "/fit.png",
        title: "Fitness",
        opening: 3
    },

    {
        id: 5,
        image: "/ind.png",
        title: "Industry",
        opening: 3
    },
]

function Recomended_jobs() {
    return (
        <div className='bg-[#f5f6fc]'>
            <div className='container mx-auto px-6 py-24'>

                <div className='md:flex items-center justify-between'>
                    <h2 className='xl:text-5xl lg:text-3xl text-2xl font-semibold'>
                        Recomended jobs
                    </h2>
                    <div className='md:flex gap-x-4'>
                        <button className='rounded-full md:my-0 my-4 bg-indigo-700 text-lg text-white font-bold px-8 py-3 ouutline-none border-none hoverBtn'>Latest Job</button>
                        <button className='rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn'>Premium Job</button>
                    </div>
                </div>

                <p className='text-2xl mt-4 font-light'>Explore suggested job searches</p>

                <div className='xl:flex gap-x-8 mt-16'>
                    <div className='xl:w-2/5'>
                        <div className='bg-white rounded-[10px] py-8 pl-6 mb-4'>
                            <h2 className='text-4xl font-semibold'>Job Categories</h2>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            {data.map((cat, index) => (
                                <Categories key={index} image={cat.image} opening={cat.opening} title={cat.title} />
                            ))}
                            {data.map((cat, index) => (
                                <Categories key={index} image={cat.image} opening={cat.opening} title={cat.title} />
                            ))}
                            {data.map((cat, index) => (
                                <Categories key={index} image={cat.image} opening={cat.opening} title={cat.title} />
                            ))}
                        </div>
                    </div>

                    <div className='xl:w-3/5 flex flex-col gap-y-3 xl:mt-0 mt-4'>
                        <Recommended
                            amount="3000-4000"
                            bgColor="#f4f4ff"
                            color="#4b4efc"
                            country="Germany"
                            job="Construction"
                            time="4"
                            title="Project Manager"
                            type='Temporary'
                        />
                        <Recommended
                            amount="3000-4000"
                            bgColor="#fbf2f6"
                            color="#b70041"
                            country="USA"
                            job="Construction"
                            time="4"
                            title="UI / UX Designer"
                            type='Temporary'
                        />
                        <Recommended
                            amount="3500-4000"
                            bgColor="#f4f4ff"
                            color="#4b4efc"
                            country="Netherlands"
                            job="Construction"
                            time="4"
                            title="Seo Manager"
                            type='Temporary'
                        />
                        <Recommended
                            amount="2500-4500"
                            bgColor="#fffbf2"
                            color="#ffb800"
                            country="Sweden"
                            job="Construction"
                            time="4"
                            title="Front End"
                            type='Temporary'
                        />
                        <Recommended
                            amount="1000-2500"
                            bgColor="#f4f4ff"
                            color="#4b4efc"
                            country="USA"
                            job="Construction"
                            time="4"
                            title="Django Developer"
                            type='Temporary'
                        />
                        <Recommended
                            amount="2000-4000"
                            bgColor="#f4f4ff"
                            color="#4b4efc"
                            country="Greece"
                            job="Construction"
                            time="4"
                            title="Python"
                            type='Temporary'
                        />
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Recomended_jobs