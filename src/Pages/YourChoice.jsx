import React from 'react';
import users from "../assets/images/team.svg";
import power from "../assets/images/flash.svg";
import setting from "../assets/images/setting.svg";
import friend from "../assets/images/meetup.svg";

const YourChoice = () => {
    const data = [
        {
            id: 1,
            title: "5+ Years of WordPress Expertise: Proven Results",
            description: "With more than five years of expertise, we have approved 1,500+ firms to supercharge performance, improve security, ensure seamless updates, enhance your site's usability, drive rankings, and drive real, measurable growth for your business.",
            icon: users
        },
        {
            id: 2,
            title: "Boost Your Site's Speed with Free Hosting",
            description: "Say goodbye to slow load times! With every WordPress maintenance plan, we provide complimentary high-speed hosting to give your visitors the fast, smooth experience they expect. Better performance = higher engagement and improved SEO rankings. No extra fees for superior speed!",
            icon: power
        },
        {
            id: 3,
            title: "Customized WordPress Maintenance for Growth",
            description: "Our customized WordPress maintenance services are designed to align with your specific business goals. Whether you're aiming to boost site performance, enhance user experience, or drive more sales, we transform your website into a growth engine that works for you.",
            icon: setting
        },
        {
            id: 4,
            title: "Trusted by Thousands for WordPress Success",
            description: "From small businesses to large enterprises, thousands of clients trust us to protect, optimize, and grow their websites. With 98% customer satisfaction, (domain name) becomes your reliable partner, boosting performance, ensuring security, and helping your business thrive online with expert support every step of the way.",
            icon: friend
        },
    ];

    return (
        <section className="bg-[#f6f6fc] py-12">
            <div className="container mx-auto">
                <div className='flex justify-center items-center'>
                    <h1 className='md:text-xlarge text-basic text-center font-bold text-primary mb-16 max-w-[650px]'>Why We’re the Right Choice For Your <span className='bg-gradient rounded-full text-[#1D49C3] pt-2 font-bold '>WordPress Maintenance?</span> </h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer">
                    {data.map(item => (
                        <div key={item.id} className="bg-white hover:bg-[#E2EBFF] transition-all ease-in duration-300 p-4 rounded-medium flex flex-col space-y-4 shadow-main">
                            <div className="flex items-center gap-4">
                                <img src={item.icon} alt={`${item.title} Icon`} className="lg:size-10 size-8" />
                                <h3 className="lg:text-basic text-base font-semibold text-primary">{item.title}</h3>
                            </div>
                            <p className="text-primary font-medium text-medium max-w-[550px] leading-7 lg:ps-14 ps-12">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default YourChoice;