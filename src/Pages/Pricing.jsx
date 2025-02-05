import React from 'react';
import HighlightedHeading from "../components/HighlightedHeading";
import { Link } from 'react-router-dom';
import { FaTrophy, FaCheckCircle, FaMedal, FaCrown, FaGem } from "react-icons/fa";  // Trophy icon for highlighting

const Pricing = () => {
    const data = [
        {
            id: 1,
            name: "SiteGuard Essentials",
            price: "$39",
            tag: "Silver",
            features: [
                "High Speed SiteGround hosting free",
                "Core, Themes, and Plugins Updates",
                "Cloud Backups: 14-day retention.",
                "Uptime Monitoring",
                "Speed & Performance Optimization",
                "Version Control",
                "Activity Log",
                "Monthly Maintenance Report",
            ],
        },
        {
            id: 2,
            name: "SiteGuard Proactive",
            price: "$89",
            tag: "Gold",
            isMostPopular: true,
            features: [
                "High Speed SiteGround hosting free",
                "All Silver Plan Features",
                "Cloud Backups: 30-day retention",
                "Monthly SEO Reports",
                "WooCommerce Optimization",
                "Cart Abandonment Solutions",
                "Bi-Weekly Detailed Reports",
                "Unlimited 24/7 Chat Priority Support",
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
                "Ongoing CRO Strategies",
                "Detailed SEO Audits",
                "Google Analytics Integration",
                "Secure Payment Gateway Integration",
                "Performance and Speed Optimization",
            ],
        },
    ];

    const getTagStyle = (tag) => {
        switch (tag) {
            case "Silver":
                return {
                    className: "bg-gray-100 text-gray-600",
                    icon: <FaMedal className="inline-block mr-2 text-base" />, // Adjusted size and margin
                };
            case "Gold":
                return {
                    className: "bg-yellow-100 text-yellow-600",
                    icon: <FaCrown className="inline-block mr-2 text-base" />,  // Adjusted size and margin
                };
            case "Platinum":
                return {
                    className: "bg-blue-100 text-blue-600",
                    icon: <FaGem className="inline-block mr-2 text-base" />,  // Adjusted size and margin
                };
            default:
                return {
                    className: "bg-gray-200 text-gray-700",
                    icon: null,
                };
        }
    };

    return (
        <section className="md:pt-10 pt-5 bg-white">
            <div className="container mx-auto">
                <div className="flex pb-14 justify-center items-center">
                    <HighlightedHeading
                        mainText="Flexible Pricing for "
                        highlightedText="Your Growth "
                        center={true}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-4">
                    {data.map(item => (
                        <div
                            key={item.id}
                            className={`relative rounded-medium shadow-main bg-white hover:shadow-lg transition-shadow duration-300 ${item.isMostPopular ? 'border-4 border-light-blue' : 'border border-gray-300'
                                }`}
                        >
                            {item.isMostPopular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light-blue text-white py-2 px-6 rounded-full shadow-md text-sm font-bold flex items-center space-x-2">
                                    <FaTrophy className="size-4" />
                                    <span>Most Popular</span>
                                </div>
                            )}

                            <div className="p-4">
                                <div className={`text-sm font-semibold uppercase tracking-wider text-center my-4 ${getTagStyle(item.tag).className} py-1.5 rounded flex items-center justify-center`}>
                                    {getTagStyle(item.tag).icon} {item.tag}  {/* Icon before the text */}
                                </div>

                                <h3 className="text-base font-bold text-primary text-center mb-4">
                                    {item.name}
                                </h3>

                                <div className="flex items-center justify-center mb-6">
                                    <span className="text-5xl font-bold text-light-blue">{item.price}</span>
                                    <span className="text-gray-500 ml-1">/ month</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-primary font-medium">
                                            <FaCheckCircle className="text-green-500 mr-2 size-4" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/services"
                                    className="block bg-light-blue hover:bg-blue-900 text-white py-3 rounded-lg text-center font-semibold transition-colors duration-300"
                                >
                                    View Full Plans
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;