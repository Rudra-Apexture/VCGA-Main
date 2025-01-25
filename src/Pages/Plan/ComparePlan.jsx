import React, { useState } from 'react';
import HighlightedHeading from '../../components/HighlightedHeading';
import ring from '../../assets/images/ring.svg';
import gold from '../../assets/images/gold.svg';
import star from '../../assets/images/star.svg';

const Tooltip = ({ content, isVisible }) => {
    return (
        <div
            className={`term-tooltip-content bg-white border border-gray-300 rounded-xl absolute md:left-4 left-0 md:text-small text-xxs text-primary font-medium md:top-10 top-14 z-10 p-2.5 shadow-main transform transition-opacity duration-300 ease-in ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            {content}
        </div>
    );
};

const ComparePlan = () => {
    const planData = [
        {
            feature: "High Speed SiteGround hosting free",
            silver: "✔",
            gold: "✔",
            platinum: "✔"
        },
        {
            feature: "WordPress core, themes, and plugins Updates",
            silver: "✔",
            gold: "✔",
            platinum: "✔",
            tooltip: "Core, Themes and Plugin file update for your WordPress site. everyday by our Team Tested & Reviewed."

        },
        {
            feature: "Cloud Backup",
            silver: "14 Days",
            gold: "30 Days",
            platinum: "30 Days",
            tooltip: "Cloud Backup for your WordPress site"
        },
        {
            feature: "Uptime Monitoring",
            silver: "✔",
            gold: "✔",
            platinum: "✔",
            tooltip: "Uptime Monitoring for your WordPress site"
        },
        {
            feature: "Speed & Performance Optimization",
            silver: "✔",
            gold: "✔",
            platinum: "✔",
            tooltip: "Speed & Performance Optimization for your WordPress site"
        },
        {
            feature: "Version Control",
            silver: "✔",
            gold: "✔",
            platinum: "✔",
            tooltip: "Version Control for your WordPress site"
        },
        {
            feature: "Activity Log",
            silver: "✔",
            gold: "✔",
            platinum: "✔",
            tooltip: "Activity Log for your WordPress site"
        },
        {
            feature: "Database Management",
            silver: "✔",
            gold: "✔",
            platinum: "✔",
            tooltip: "Database Management for your WordPress site"
        },
        {
            feature: "Git Management",
            silver: "",
            gold: "",
            platinum: "✔",
            tooltip: "Git Management for your WordPress site"
        },
        {
            feature: "Image Optimization",
            silver: "✔",
            gold: "✔",
            platinum: "✔",
            tooltip: "Image Optimization for your WordPress site"
        },
        {
            feature: "Monthly SEO Reports",
            silver: "",
            gold: "✔",
            platinum: "✔",
            tooltip: "Monthly SEO Reports for your WordPress site"
        },
        {
            feature: "Ongoing CRO strategies",
            silver: "",
            gold: "",
            platinum: "✔",
            tooltip: "Ongoing CRO strategies for your WordPress site"
        },
        {
            feature: "Detailed SEO audits",
            silver: "",
            gold: "",
            platinum: "✔",
            tooltip: "Detailed SEO audits for your WordPress site"
        },
        {
            feature: "WooCommerce Optimization",
            silver: "",
            gold: "✔",
            platinum: "✔",
            tooltip: "WooCommerce Optimization for your WordPress site"
        },
        {
            feature: "Site Maintenance Report",
            silver: "Monthly",
            gold: "Bi-Weekly",
            platinum: "Weekly Comprehensive",
            tooltip: "Site Maintenance Report for your WordPress site"
        },
        {
            feature: "24/7 Support",
            silver: "Email Support",
            gold: "Email & Chat Support",
            platinum: "Email, Chat & Call Support",
            tooltip: "24/7 Support for your WordPress site"
        },
        {
            feature: "Advanced (Firewall, Complete Malware )",
            silver: "✔",
            gold: "✔",
            platinum: "✔",
            tooltip: "Advanced (Firewall, Complete Malware ) for your WordPress site"
        },
        {
            feature: "24/7 real-time security monitoring",
            silver: "✔",
            gold: "✔",
            platinum: "✔",
            tooltip: "24/7 real-time security monitoring for your WordPress site"
        }
    ];

    const planTypes = ["silver", "gold", "platinum"];

    return (
        <section className='Pricing-Plan py-12'>
            <div className='container mx-auto'>
                <div className='pb-10'>
                    <HighlightedHeading
                        mainText='Compare '
                        highlightedText='Plans '
                        center={true}
                    />
                </div>
            </div>

            <div className='lg:max-w-7xl mx-auto bg-white shadow-main rounded-lg overflow-hidden py-10'>
                {/* <!-- Pricing Table --> */}
                <div className='lg:block hidden'>
                    <table className='table-auto w-full text-left border-collapse'>
                        <thead>
                            <tr>
                                <th className="px-6 py-4 lg:block hidden">
                                </th>
                                <th>
                                    <button className='lg:px-20 px-10 rounded-lg py-2 text-[#4B494B] text-medium bg-[#C9C9C9] flex items-center gap-2'>
                                        <img src={ring} alt="" />
                                        Silver
                                    </button>
                                </th>
                                <th>
                                    <button className='lg:px-20 px-10 rounded-lg py-2 text-[#E4B200] text-medium bg-[#F7E8B3] flex items-center gap-2'>
                                        <img src={gold} alt="" />
                                        Gold
                                    </button>
                                </th>
                                <th>
                                    <button className='lg:px-20 px-10 rounded-lg py-2 text-[#00458A] text-medium bg-[#B3C8DC] flex items-center gap-2'>
                                        <img src={star} alt="" />
                                        Platinum
                                    </button>
                                </th>
                            </tr>
                        </thead>

                        <tbody className='lg:text-medium text-small font-normal cursor-help'>
                            {planData.map((item, index) => {
                                const [isTooltipVisible, setIsTooltipVisible] = useState(false);
                                return (
                                    <tr key={index}>
                                        <th
                                            className={`px-6 py-3 border-b border-dashed font-normal relative`}
                                            onMouseEnter={() => setIsTooltipVisible(true)}
                                            onMouseLeave={() => setIsTooltipVisible(false)}
                                        >
                                            {item.feature}
                                            {item.tooltip && (
                                                <Tooltip content={item.tooltip} isVisible={isTooltipVisible} />
                                            )}
                                        </th>
                                        <td className='px-6 py-3 text-center'>{item.silver}</td>
                                        <td className='px-6 py-3 text-center '>{item.gold}</td>
                                        <td className='px-6 py-3 text-center'>{item.platinum}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td></td>
                                <td>
                                    <button className='lg:px-12 text-nowrap rounded-lg py-3 mt-5 text-white text-medium bg-light-blue font-medium capitalize'>
                                        get started now
                                    </button>
                                </td>
                                <td>
                                    <button className='lg:px-12 text-nowrap rounded-lg lg:block hidden py-3 mt-5 text-white text-medium bg-light-blue font-medium capitalize'>
                                        get started now
                                    </button>
                                </td>
                                <td>
                                    <button className='lg:px-12 text-nowrap rounded-lg lg:block hidden py-3 mt-5 text-white text-medium bg-light-blue font-medium capitalize'>
                                        get started now
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden block px-4">
                    <div className='flex flex-col justify-center space-y-4 mb-6'>
                        {planTypes.map(plan => (
                            <button key={plan} className={`px-6 py-5 rounded-lg text-medium  flex items-center gap-2  
                         ${plan === 'silver' ? 'bg-[#C9C9C9] text-[#4B494B]'
                                    : plan === 'gold' ? 'bg-[#F7E8B3] text-[#E4B200]'
                                        : 'bg-[#B3C8DC] text-[#00458A]'}`}>
                                {plan === 'silver' && <img src={ring} alt="" />}
                                {plan === 'gold' && <img src={gold} alt="" />}
                                {plan === 'platinum' && <img src={star} alt="" />}
                                {plan.charAt(0).toUpperCase() + plan.slice(1)}
                            </button>
                        ))}
                    </div>

                    {planData.map((item, index) => {
                        const [isTooltipVisible, setIsTooltipVisible] = useState(false);
                        return (
                            <div key={index} className='mb-4 flex justify-between relative '
                                onMouseEnter={() => setIsTooltipVisible(true)}
                                onMouseLeave={() => setIsTooltipVisible(false)}>
                                <h4 className='font-medium border-b border-dashed border-gray-300 relative'>{item.feature}
                                    {item.tooltip && (
                                        <Tooltip content={item.tooltip} isVisible={isTooltipVisible} />
                                    )}
                                </h4>

                                <div className='flex items-center'>
                                    {item.silver && <span className='text-primary font-medium text-xs md:text-medium'>
                                        {item.silver}
                                    </span>}

                                </div>

                            </div>
                        )
                    })}
                    {/* buttons */}
                    <div className="flex justify-center mt-5">
                        <button className='text-nowrap rounded-lg py-3 text-white text-medium bg-light-blue font-medium capitalize'>
                            get started now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparePlan;