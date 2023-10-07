import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const services = useLoaderData();
    console.log(services);

    const { id } = useParams();

    const selectedService = services.find(service => service.id == id);
    const { name, price, features, not_included_features, featured_images, description } = selectedService;
    console.log(selectedService);


    return (
        <div>
            {id}
            {name}
            {price}
            {features.map((feature, idx) => <li key={idx}>{feature}</li>)}
            {not_included_features.map((feature, idx) => <li key={idx}>{feature}</li>)}
            {featured_images.map((feature, idx) => <img src={feature} key={idx}></img>)}
            {description}
            {name}
        </div>
    );
};

export default ServiceDetails;