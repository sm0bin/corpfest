import Carousel from "./shared/Carousel";
import ServiceCards from "./shared/ServiceCards";
import Faq from "./shared/Faq";
import Stat from "./shared/Stat";

const Home = () => {
    return (
        <>
            <Carousel></Carousel>
            <div className="max-w-7xl mx-4 lg:mx-auto min-h-[calc(100vh-3rem)]">
                <ServiceCards></ServiceCards>
                <Stat></Stat>
                <Faq></Faq>
            </div>

        </>
    );
};

export default Home;