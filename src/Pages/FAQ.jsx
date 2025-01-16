import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question:
                "What does WordPress maintenance include?",
            answer:
                "WordPress maintenance is done under the various tasks desired to keep your website in top working condition. This comprises updates on core WordPress software, themes, and plugins, regular backups, enhancing security, performance optimization, and technical support for problems as they arise.",
        },
        {
            question: "Why is routine WordPress maintenance important?",
            answer:
                "Maintaining your WordPress site regularly keeps it secure, updated, and applicable. It ensures you are using the latest features and plugins, guards against security risks, and helps avert possible downtimes.",
        },
        {
            question: "How usually should I update my WordPress site?",
            answer:
                "We recommend updating your WordPress site at least once in a month for its proper working and security. But critical updates like security patches should be implemented right after they are available.",
        },
        {
            question: "What if my website breaks or gets hacked? Can you help me fix it?",
            answer:
                "Absolutely! We provide urgent website restoration services. We can help restore your website from a backup if it hits or is compromised, and we can make sure it is secure to avoid problems in the future.",
        },
        {
            question: "What are the common signs that my WordPress website requires maintenance?",
            answer:
                "Slow site performance, broken links, out-of-date plugins or themes, security flaws, and frequent outages are all warning signs. It's time for expert maintenance if you observe any of these.",
        },
        {
            question: "Would you be able to help me with my WordPress website's SEO?",
            answer:
                "Of course! To raise your website's search engine ranking, we provide SEO services like content analysis, meta tag creation, keyword optimization, and performance enhancements.",
        },
        {
            question: "How much does WordPress maintenance cost?",
            answer:
                "The cost depends on the service you require. We offer different packages of maintenance services to suit various budgets, so do not hesitate to contact us to get a quote tailored to your website's requirements.",
        },
    ];

    return (
        <section className="FAQ-List">
            <div className="container mx-auto">
                <h1 className="md:text-xlarge text-basic font-bold text-primary text-center pb-10">
                    Frequently Asked{' '}
                    <span className="bg-gradient rounded-full text-[#1D49C3] pt-2 font-bold">
                        Questions
                    </span>{' '}
                </h1>
                <div className="mt-10 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="space-y-4">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`flex justify-between items-center w-full border-b border-[#E4E6EC] pb-3.5 ${openIndex === index ? "" : "bg-white"
                                    }`}
                            >
                                {/* Question */}
                                <h2 className="font-medium lg:text-base text-medium text-start text-primary">
                                    {faq.question}
                                </h2>

                                {/* Icon (+/-) */}
                                <span
                                    className={`transition-all duration-300 text-base rounded-full md:px-4 md:py-1.5 px-3 py-1 flex items-center justify-center ${openIndex === index
                                        ? "bg-light-blue text-white"
                                        : "bg-[#fff] text-black"
                                        }`}
                                >
                                    {openIndex === index ? (
                                        <HiMinus className="text-white h-5 transform transition-transform duration-300" />
                                    ) : (
                                        <HiPlus className="text-black h-5 transform transition-transform duration-300" />

                                    )}
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-[max-height] duration-700  ease-in-out ${openIndex === index ? "max-h-[150px]" : "max-h-0"
                                    }`}
                            >
                                <p className="font-normal text-primary text-small lg:text-medium mb-2">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
