import React from 'react';
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

    return (
        <section className='py-12'>
            <div className='container mx-auto'>
                <h1 className="md:text-xlarge text-basic font-bold text-primary pb-10">
                    Explore Our{' '}
                    <span className="bg-gradient rounded-full text-[#1D49C3] pt-2 font-bold ">
                        Case Studies
                    </span>{' '}
                </h1>
                
                <div className="bg-white mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {data.map(item => (
                            <div key={item.id} className="bg-white rounded-medium shadow-main border border-gray-300 lg:p-10 p-6 flex flex-col space-y-4">
                                <img src={item.icon} alt={`${item.title} Icon`} className="lg:size-16 md:size-12 size-10" />
                                <h3 className="lg:text-basic text-medium font-semibold text-primary">{item.title}</h3>
                                <p className="text-primary font-medium text-medium lg:text-base">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Care;