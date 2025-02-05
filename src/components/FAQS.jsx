import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

const FAQS = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What does WordPress maintenance include?",
            answer: "WordPress maintenance includes various tasks designed to keep your website in top working condition. This comprises updates on core WordPress software, themes, and plugins, regular backups, enhancing security, performance optimization, and technical support for problems as they arise.",
        },
        {
            question: "Why is routine WordPress maintenance important?",
            answer: "Maintaining your WordPress site regularly keeps it secure, updated, and applicable. It ensures you are using the latest features and plugins, guards against security risks, and helps avert possible downtimes.",
        },
        {
            question: "How usually should I update my WordPress site?",
            answer: "We recommend updating your WordPress site at least once a month for its proper working and security. Critical updates like security patches should be implemented right after they are available.",
        },
        {
            question: "What if my website breaks or gets hacked? Can you help me fix it?",
            answer: "Absolutely! We provide urgent website restoration services. We can help restore your website from a backup if it is hit or compromised, and we can make sure it is secure to avoid problems in the future.",
        },
        {
            question: "What are the common signs that my WordPress website requires maintenance?",
            answer: "Slow site performance, broken links, out-of-date plugins or themes, security flaws, and frequent outages are all warning signs. It's time for expert maintenance if you observe any of these.",
        },
        {
            question: "Would you be able to help me with my WordPress website's SEO?",
            answer: "Of course! To raise your website's search engine ranking, we provide SEO services like content analysis, meta tag creation, keyword optimization, and performance enhancements.",
        },
        {
            question: "How much does WordPress maintenance cost?",
            answer: "The cost depends on the service you require. We offer different packages of maintenance services to suit various budgets, so do not hesitate to contact us to get a quote tailored to your website's requirements.",
        },
        {
            question: "Do you provide tutorials or resources for WordPress users?",
            answer:
                "Yes! We have step-by-step tutorials and blog posts that start from basic site management up to advanced tips about optimizing, securing, or customizing WordPress. These tools are meant to guide you toward the confident maintenance of your site.",
        },
        {
            question: "How is billing done for WordPress maintenance packages?",
            answer:
                "For our monthly WordPress maintenance plans, we charge on a recurring monthly basis if the plan is active. For our emergency support, the charge is a one-time fee per service request. Please contact our support team if you have any billing-related questions or need further clarity!",
        }
    ];

    return (
        <section className="FAQ-List">
            <div className="container mx-auto">
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-2xl border border-slate-300 overflow-hidden mt-12">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`flex justify-between items-center w-full md:p-5 p-2 text-left transition-colors duration-300 focus:outline-none`}
                                aria-expanded={openIndex === index}  // Accessibility: indicate expanded state
                            >
                                <h2 className="lg:text-lg text-small font-medium text-primary">{faq.question}</h2>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180 text-light-blue" : "text-gray-500"}`}>
                                    {openIndex === index ? <HiMinus className="size-6" /> : <HiPlus className="size-6" />}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-[max-height] duration-700 lg:px-4 px-2 ease-in-out ${openIndex === index ? "max-h-[250px] border-t-2 border-light-blue" : "max-h-0" //Conditionally add the border
                                    }`}
                            >
                                <p className="font-normal text-slate-700 text-small lg:text-medium py-4">
                                    {faq.answer}    
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default FAQS