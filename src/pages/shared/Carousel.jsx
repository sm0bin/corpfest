import { Link } from "react-router-dom";

const Carousel = () => {
    const heroContent = [
        {
            id: 1,
            img: "https://i.ibb.co/85txQmQ/5.jpg",
            headline: "Experience Unforgettable Events",
            details: "We create and manage corporate events that leave a lasting impression. Explore our services and make your next event truly memorable."
        },
        {
            id: 2,
            img: "https://i.ibb.co/wp3nzwh/6.jpg",
            headline: "Expert Event Planning Team",
            details: "Our team of experienced event planners is dedicated to bringing your vision to life. Let us handle the details while you enjoy a stress-free event."
        },
        {
            id: 3,
            img: "https://i.ibb.co/WDNk35j/7.jpg",
            headline: "Tailored Solutions for You",
            details: "We understand that every event is unique. Our customized event solutions ensure that your specific goals and objectives are met."
        },
        {
            id: 4,
            img: "https://i.ibb.co/F5WQdH3/8.jpg",
            headline: "Exceptional Service",
            details: "We are committed to providing exceptional service at every stage of your event. Your satisfaction is our top priority."
        },
        {
            id: 5,
            img: "https://i.ibb.co/nrTG6hG/9.jpg",
            headline: "Innovative Event Concepts",
            details: "Our creative team is constantly innovating to bring you fresh and exciting event concepts. Stay ahead of the curve with us."
        }
    ]

    return (
        <section>
            <div className="carousel w-full">
                {heroContent.map((item, index) => (
                    <div key={index} id={item.id} className="carousel-item relative w-full text-white">
                        <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${item.img})` }}>
                            <div className="hero-overlay bg-base-500/70"></div>
                            <div className="hero-content max-w-full text-center text-neutral-content">
                                <div className="">
                                    <h1 className="mb-5 text-5xl font-bold">{item.headline}</h1>
                                    <p className="mb-5">{item.details}</p>
                                    <Link to="sign-up">
                                        <button className="px-8 py-4 rounded-lg text-white bg-rose-500 hover:bg-rose-600">Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#${item.id === 1 ? 5 : item.id - 1}`} className="btn btn-circle bg-opacity-0 text-white">❮</a>
                            <a href={`#${item.id === 5 ? 1 : item.id + 1}`} className="btn btn-circle bg-opacity-0 text-white">❯</a>

                        </div>
                    </div>
                ))
                }
            </div>
        </section>
    );
};

export default Carousel;