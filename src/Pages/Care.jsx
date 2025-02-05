import React, { useState, useEffect } from 'react';
import space from "../assets/images/boost.svg";
import storage from "../assets/images/cloud.svg";
import desktop from "../assets/images/web.svg";
import shield from "../assets/images/protected.svg";
import HighlightedHeading from '../components/HighlightedHeading'; // Adjust path

const Care = () => {
    const data = [
        {
            "id": 1,
            "title": "Performance & Optimization",
            "description": "We improve the performance of your website by optimizing images, and files, and minimizing page requests with faster loading times and a better user experience",
            "icon": space
        },
        {
            "id": 2,
            "title": "Site Updates & Backups",
            "description": "Running older versions of WordPress and old versions of plugins may put your website at security risk. We update your website and make a backup to ensure it stays safe and running well.",
            "icon": storage
        },
        {
            "id": 3,
            "title": "On-Demand Web Help",
            "description": "Customized feature upgrades and performance improvements ensure your website is fast, fully functional, and optimized for success, helping your business grow and thrive online.",
            "icon": desktop
        },
        {
            "id": 4,
            "title": "Security Monitoring & Reporting",
            "description": "We continuously monitor your WordPress site to ensure that it stays secure from threats. Our detailed reports will keep you posted so you can immediately act when needed.",
            "icon": shield
        }
    ];

    const [animatedIndex, setAnimatedIndex] = useState(-1); // Start with -1, no item initially animated
    const [hasMounted, setHasMounted] = useState(false); // Track component mount

    useEffect(() => {
        setHasMounted(true); // Set to true when component mounts

        const timer = setTimeout(() => {
            if (data.length > 0) {
                setAnimatedIndex(0); // Start animation after the component mounts
            }
        }, 500); // Delay the initial start by 0.5 seconds

        return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }, [data.length]);

    useEffect(() => {
        if (hasMounted && animatedIndex < data.length - 1 && animatedIndex !== -1) {
            const timer = setTimeout(() => {
                setAnimatedIndex(animatedIndex + 1);
            }, 300); // Delay between each animation

            return () => clearTimeout(timer);
        }
    }, [animatedIndex, data.length, hasMounted]);


    return (
        <section className='Trusted-Care'>
            <div className='container mx-auto'>
                <div className="flex justify-center items-center">
                    <HighlightedHeading
                        mainText="We've Got It "
                        highlightedText="All Taken Care Of"
                        center={true}
                    />
                </div>
                <div className="bg-white mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.map((item, index) => (
                            <div
                                key={item.id}
                                className={`bg-white rounded-medium shadow-main border border-slate-300 lg:p-6 p-4 flex flex-col space-y-5
                                    ${index <= animatedIndex
                                        ? 'opacity-100 transform-none'
                                        : 'opacity-0 translate-y-10 skew-y-1'
                                    }
                                    transition-transform duration-700 ease-in-out-cubic
                                `}
                            >
                                <img src={item.icon} alt={`${item.title} Icon`} className="lg:size-14 size-10" />
                                <h3 className="lg:text-basic text-medium font-medium text-primary">{item.title}</h3>
                                <p className="text-gray-700 font-normal text-medium lg:text-medium">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Care;