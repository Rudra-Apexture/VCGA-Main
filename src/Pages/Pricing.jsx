import React from 'react';
import { GiCheckMark } from "react-icons/gi";
import HighlightedHeading from "../components/HighlightedHeading";


const Pricing = () => {
    const data = [
        {
            id: 1,
            name: "SiteGuard Essentials",
            price: "$39",
            tag: "Silver",
            features: [
                "High Speed SiteGround hosting free",
                "WordPress core, themes, and plugins Updates",
                "Cloud Backups: 14-day retention.",
                "Uptime Monitoring",
                "Speed & Performance Optimization",
                "Version Control",
                "Activity Log",
            ],
        },
        {
            id: 2,
            name: "SiteGuard Proactive",
            price: "$89",
            tag: "Gold",
            isMostPopular: true, // Added this flag
            features: [
                "High Speed SiteGround hosting free",
                "All Silver Plan Features",
                "Cloud Backups: 30-day retention",
                "Monthly SEO Reports",
                "WooCommerce Optimization",
                "Cart Abandonment Solutions",
                "Bi-Weekly Detailed Reports",
                "Add Customize Services +$99",
            ],
        },
        {
            id: 3,
            name: "SiteGuard Elite",
            price: "$189",
            tag: "Platinum",
            features: [
                "High Speed SiteGround hosting free",
                "All Gold Plan Features",
                "Git Management",
                "Ongoing CRO strategies",
                "Ongoing CRO strategies",
                "Detailed SEO audits",
                "Google Analytics Integration",
                "Secure Payment Gateway Integration",
                "Performance and Speed Optimization",
            ],
        },
    ];

    const getTagStyle = (tag) => {
        switch (tag) {
            case "Silver":
                return { backgroundColor: "#c9c9c9", color: "#3E4644" };
            case "Gold":
                return { backgroundColor: "#F7E8B3", color: "#E4B200" };
            case "Platinum":
                return { backgroundColor: "#B3C7DC", color: "#00458A" };
            default:
                return { backgroundColor: "#e0e0e0", color: "#000" };
        }
    };

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto">
                {/* <h1 className='md:text-xlarge text-basic text-center font-bold text-primary mb-16'> Flexible Pricing for <span className='bg-gradient rounded-full text-[#1D49C3] pt-2 font-bold '>Your Growth
                </span> </h1> */}
                <div className='md:mb-24 mb-12'>
                    <HighlightedHeading
                        mainText="Flexible Pricing for"
                        highlightedText="Your Growth "
                        center={true}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-4 ">
                    {data.map(item => (
                        <div key={item.id} className="bg-white rounded-medium shadow-main border border-gray-300 p-6 flex flex-col space-y-4 relative">
                            <div className={`rounded-md inline-block w-24 text-center p-1.5 text-small font-bold`} style={getTagStyle(item.tag)}>{item.tag}</div>
                            <h3 className="lg:text-base text-medium font-semibold text-primary">{item.name}</h3>
                            <div className="flex items-center mb-4">
                                <span className="lg:text-5xl text-large font-bold text-primary">{item.price}</span>
                                <span className="text-[#020D0AB2] font-medium ml-2 mt-6">Per Month</span>
                            </div>
                            <div className='py-2.5'>
                                <hr />
                            </div>
                            {item.isMostPopular && (
                                <div className="absolute -top-[60px] lg:-right-24 -right-16 rounded-tl-medium rounded-tr-medium md:block hidden -translate-x-1/2 bg-light-blue text-white px-10 lg:px-24 md:px-10 py-2.5 text-center text-small font-medium">
                                    Most Popular
                                </div>
                            )}
                            <button className="bg-light-blue text-white py-3.5 rounded-md
                             border border-[#103498] text-medium inline-block text-center font-medium hover:bg-[#103498] transition-colors duration-200">View Full Plans</button>
                            <ul className="list-inside list-none space-y-2">
                                {/* Lists Items */}
                                {item.features.map((feature, index) => (
                                    <li key={index} className="flex items-center mt-2">
                                        <GiCheckMark className='size-4 text-light-blue mr-2' />
                                        <span className={`text-small text-primary font-medium leading-7 ${index === 0 ? 'font-bold' : ''}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;