import faqImage from "../../assets/faq-1.svg";


const Faq = () => {
    const faq = [
        {
            question: "How do I book your event management services?",
            answer: "Booking our event management services is easy. Simply visit our 'Contact' page and fill out the inquiry form. We'll get in touch with you to discuss your requirements and provide a customized proposal."
        },
        {
            question: "What types of events do you specialize in?",
            answer: "We specialize in a wide range of corporate events, including conferences, seminars, product launches, team-building activities, and gala dinners. Our experienced team can tailor our services to meet your specific needs."
        },
        {
            question: "Can you handle events of all sizes?",
            answer: "Yes, we have experience in organizing events of all sizes, from small intimate gatherings to large-scale conferences and conventions. Our team has the expertise and resources to ensure the success of your event, regardless of its size."
        },
        {
            question: "Do you offer event planning packages?",
            answer: "Yes, we offer customizable event planning packages to suit your budget and requirements. Whether you need full-service event planning or assistance with specific aspects of your event, we have a package for you."
        },
    ]

    return (
        <section className="my-24 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex h-full items-center justify-center">
                <img className="w-10/12" src={faqImage} alt="" />
            </div>
            <div className="">
                <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
                <h3 className=" text-lg mb-10">Here are some questions you might ask about our corporate event services</h3>
                <div className="space-y-4">

                    {faq.map((item, index) => (
                        <div key={index} className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                {item.question}
                            </div>
                            <div className="collapse-content">
                                <p>{item.answer}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;