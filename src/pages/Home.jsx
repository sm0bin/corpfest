import Carousel from "./shared/Carousel";
import ServiceCards from "./shared/ServiceCards";
import Faq from "./shared/Faq";
import Stat from "./shared/Stat";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ServiceCards></ServiceCards>
            <Stat></Stat>
            <Faq></Faq>
        </div>
    );
};

export default Home;