import React from 'react';
import users from "../assets/images/team.svg";
import power from "../assets/images/flash.svg";
import setting from "../assets/images/setting.svg";
import friend from "../assets/images/meetup.svg";

const YourChoice = () => {
    const data = [
        {
            id: 1,
            title: "5+ Year of WordPress Expertise Results",
            description: "With more than five years of expertise, we have empowered 1,500+ firms to supercharge performance, improve security, and drive real, measurable growth for their business.",
            icon: users,
            bgColor: "from-blue-500 to-sky-500",
        },
        {
            id: 2,
            title: "Boost Your Site’s Speed with Free Hosting",
            description: "Say goodbye to slow load times! With every WordPress maintenance plan, we provide complimentary high-speed hosting to ensure a seamless user experience.",
            icon: power,
            bgColor: "from-purple-500 to-violet-300",
        },
        {
            id: 3,
            title: "Customized WordPress Maintenance for Growth",
            description: "Our tailored maintenance services align with your specific business goals, helping to you optimize performance, enhance UX, with increase more conversions.",
            icon: setting,
            bgColor: "from-green-500 to-teal-500",
        },
        {
            id: 4,
            title: "Trusted by Thousands for WordPress Success",
            description: "Thousands of clients trust us to protect,Real-World Applications of WordPress, optimize, and grow their websites, ensuring security, performance, and 24/7 expert support.",
            icon: friend,
            bgColor: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section className="md:pt-10 pt-5">
            <div className="container mx-auto">
                {/* Section Heading */}
                <div className='flex justify-center items-center'>
                    <h1 className='md:text-xlarge text-basic text-center font-bold text-primary max-w-2xl'>Why We’re the Right Choice For Your <span className='bg-gradient rounded-full text-light-blue py-0.5 font-bold '>WordPress Maintenance?</span> </h1>
                </div>

                {/* Cards Section */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((item) => (
                        <div key={item.id} className="relative group">
                            {/* Card Background with Gradient Border */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-xl blur-[1.5px] transition-all duration-300`}></div>

                            {/* Card Content */}
                            <div className="relative bg-white shadow-lg rounded-xl lg:p-6 p-4 flex flex-col items-center text-center transform transition-all duration-300">
                                {/* Icon */}
                                <div className="p-3 mb-6">
                                    <img src={item.icon} alt={item.title} className="size-12" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-medium text-primary">{item.title}</h3>

                                {/* Description */}
                                <p className="text-gray-700 font-normal text-small break-words mt-5">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default YourChoice;
