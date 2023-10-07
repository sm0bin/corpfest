import { useEffect, useState } from "react";

const ServiceCards = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <section>
            <h1 className="text-4xl font-bold text-center mt-24 mb-12">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {

                    services.map(service => (
                        <div key={service.id} className="card card-compact bg-base-100 shadow-md">
                            <figure><img src={service.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{service.name}</h2>
                                <h2 className="card-title text-lg">Price Range: <span className="text-rose-600">{service.price}</span></h2>
                                <p className="text-base">{service.description}</p>
                                <div className="card-actions mt-4">
                                    <button className="py-4 text-lg rounded-md bg-rose-500 hover:bg-rose-600 text-white w-full">See Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default ServiceCards;