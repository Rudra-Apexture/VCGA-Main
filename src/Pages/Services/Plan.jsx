import React from 'react'
import HighlightedHeading from '../../components/HighlightedHeading'
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import mark from "../../assets/images/mark.svg";

const Plan = () => {

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
                "Database Management",
                "Image Optimization",
                "Keyword Tracking",
                "Monthly Maintenance Report",
                "Unlimited 24/7 Email Support",
                "Basic Security Monitoring, 24/7 real-time monitoring with firewall protection"
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
                "Unlimited 24/7 Email & Chat Priority Support",
                "Advanced (Firewall, Complete Malware Scan & Removal )"
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
                "White-Label Options for Agency",
                "Weekly Comprehensive Reports",
                "Unlimited 24/7 Email, Call & Chat Emergency Support",
                "24/7 real-time security monitoring",
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
        <section className='Maintenance-Plan pt-12'>
            <div className='container mx-auto'>
                <div className='text-center space-y-3.5'>
                    <HighlightedHeading
                        mainText="WordPress Maintenance "
                        highlightedText="Packages & Plans"
                        center={true}
                    />
                    <p className='text-primary font-medium text-small md:pb-20 pb-10'>Choose a plan and take the frustration out of running a site.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-6 gap-4">
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
                                <div className="absolute -top-[60px] -right-16 rounded-tl-medium rounded-tr-medium md:block hidden -translate-x-1/2 bg-light-blue text-white px-10 lg:px-20 py-2.5 text-center text-small font-medium">
                                    Most Popular
                                </div>
                            )}
                            <button className="bg-light-blue text-white py-3.5 rounded-md
                                             border border-[#103498] text-medium inline-block text-center font-medium hover:bg-[#103498] transition-colors duration-200">View Full Plans</button>
                            <ul className="list-inside list-none space-y-2">
                                {/* Lists Items */}
                                {item.features.map((feature, index) => (
                                    <li key={index} className="flex items-center mt-2">
                                        <IoCheckmarkDoneSharp className='size-5 text-light-blue mr-2' />
                                        <span className={`text-small text-primary font-medium leading-7 max-w-64 ${index === 0 ? 'font-bold text-primary' : ''}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='mt-12 space-y-4'>
                    <div className="bg-[#F3FFF3] border border-[#048504] md:gap-4 rounded-full md:p-5 p-2 flex items-center justify-center space-x-2">
                        <img src={mark} alt="main-mark" className='h-8' />
                        <p className="text-primary md:text-center text-start md:text-small text-xs font-medium">
                            Every support plans we offer is covered by
                            <span className="font-bold"> hassle-free money-back guarantee.</span>
                        </p>
                    </div>

                    <p className="text-center text-light-blue md:text-small text-xs font-medium mt-3">
                        Not sure which plan is right for you? Check out our
                        in-depth feature comparison
                        or Contact Us
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Plan