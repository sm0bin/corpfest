
const Accordion = () => {
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
        <div className="w-1/2">
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
    );
};

export default Accordion;