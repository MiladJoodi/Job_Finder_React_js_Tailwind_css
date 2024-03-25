import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Jobs from "./Jobs";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function TopCompany() {
    return (
        <div className="bg-[#fafbfc]">
            <div className="container mx-auto px-6 py-24">
                <div className="md:flex items-center justify-between">
                    <h2 className="xl:text-5xl ls:text-3xl font-semibold">
                        Top Company Registered
                    </h2>
                    <span className="md:flex gap-x-4">
                        <button className="rounded-full md:my-0 my-4 bg-indigo-700 text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">Browse Jobs</button>
                        <button className="rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow">See All Companies</button>
                    </span>
                </div>
                <p className="text-2xl mt-4 font-light">Know your worth and find the job that qualify your life</p>
                <div>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                    >
                        <Jobs
                            bg_color="#f4f4ff"
                            color="#4b4efc"
                            img="/google.png"
                            title="Product Design"
                            type="Internship"
                        />
                        <Jobs
                            bg_color="#f4f4ff"
                            color="#4b4efc"
                            img="/google.png"
                            title="Product Design"
                            type="Internship"
                        />
                        <Jobs
                            bg_color="#f4f4ff"
                            color="#4b4efc"
                            img="/amazon.png"
                            title="Product Design"
                            type="Internship"
                        />
                        <Jobs
                            bg_color="#f4f4ff"
                            color="#4b4efc"
                            img="/lg.png"
                            title="Product Design"
                            type="Internship"
                        />

                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default TopCompany 