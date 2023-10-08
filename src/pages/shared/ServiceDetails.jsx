import { useLoaderData, useParams } from "react-router-dom";
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const ServiceDetails = () => {
    const services = useLoaderData();
    console.log(services);

    const { id } = useParams();

    const selectedService = services.find(service => service.id == id);
    const { name, price, features, exclusions, featured_images, description } = selectedService;
    console.log(selectedService);


    return (
        <section className="max-w-7xl mx-4 lg:mx-auto">


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-6 my-8">

                <div className="col-span-2 carousel w-full rounded-md">
                    {featured_images.map((image, index) => (
                        <div key={index} id={index} className="carousel-item relative w-full">
                            <img src={image} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href={`#${index === 0 ? 3 : index - 1}`} className="btn btn-circle">❮</a>
                                <a href={`#${index === 3 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                    }
                </div>

                <form className="card-body p-6 pt-0 shadow-md rounded-md">
                    <h2 className="font-bold text-rose-500 text-2xl text-center">Order Here</h2>
                    <hr className="border-rose-500" />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Short Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-5">
                        <button className="py-3 text-lg rounded-md bg-rose-500 hover:bg-rose-600 text-white w-full">Order Now</button>
                    </div>
                </form>
                <div className="col-span-2 mt-5">

                    <h1 className="text-4xl font-bold mb-4">{name}</h1>
                    <h2 className="text-2xl font-bold mb-6">Price Range:  <span className="text-rose-500">{price}</span></h2>
                    <p className="text-lg text-justify">{description}</p>
                </div>
                <div className="mt-5">

                    <h2 className="text-2xl font-bold mb-4">Service Includes</h2>
                    <ul>
                        {features.map((feature, idx) => <li className=" leading-9 flex items-center gap-1.5 text-lg" key={idx}><FiCheckCircle className="text-green-500" />{feature}</li>)}
                    </ul>
                    <ul>
                        {exclusions.map((feature, idx) => <li className=" leading-9 flex items-center gap-1.5 text-lg line-through" key={idx}><FiXCircle className="text-rose-500" />{feature}</li>)}
                    </ul>
                </div>
            </div >


        </section>
    );
};

export default ServiceDetails;