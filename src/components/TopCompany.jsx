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
        <div>
            <div>
                <div>
                    <h2>Top Company Registered</h2>
                    <span>
                        <button>Browse Jobs</button>
                        <button>See All Companies</button>
                    </span>
                </div>
                <p>Know your worth and find the job that qualify your life</p>
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
                        <Jobs />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default TopCompany 