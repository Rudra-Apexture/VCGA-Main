import React from 'react'
import setting1 from "../../assets/images/setting1.svg";
import setting2 from "../../assets/images/setting2.svg";
import setting3 from "../../assets/images/setting3.svg";
import setting4 from "../../assets/images/setting4.svg";
import setting5 from "../../assets/images/setting5.svg";
import setting6 from "../../assets/images/setting6.svg";

const Services = () => {

    const services = [
        {
            id: 1,
            title: "Speed & Performance Optimization",
            description: "Our performance specialists ensure that your website loads in under two seconds by optimizing resources, compressing images, and improving server response, which means a faster, seamless user experience that keeps visitors engaged.",
            icon: setting1
        },
        {
            id: 2,
            title: "Regular Core, Theme & Plugin Updates",
            description: "We keep your WordPress site healthy by regularly updating the core files, themes, and plugins. Our service provides detailed reports to track functionality, security, and performance for optimum site performance.",
            icon: setting2
        },
        {
            id: 3,
            title: "Ultimate Advanced Security Protection",
            description: "Our top-tier security features, including malware protection, robust firewall, and 24/7 real-time monitoring, keep your site cyber-safe while also ensuring flawless performance and peace of mind.",
            icon: setting3
        },
        {
            id: 4,
            title: "24/7 Emergency Support, Anytime, Anywhere",
            description: "Our 24/7 emergency support monitors your site 1440 times a day, ensuring constant protection and fast issue resolution. Whether by email or chat, we provide immediate priority assistance whenever you need it.",
            icon: setting4
        },
        {
            id: 5,
            title: "Boost to     Your WooCommerce Performance",
            description: "Our experienced team handles all your WooCommerce needs, optimizing store performance, speed, user experience, and checkout flow, boosting conversions, and ensuring a seamless shopping experience.",
            icon: setting5
        },
        {
            id: 6,
            title: "Customizable Services for Specific Needs",
            description: "Our services are completely customizable to fit your specific needs, whether you're looking for feature or performance optimization. With our WordPress Maintenance Service solutions to match your goals.",
            icon: setting6
        },
    ];


    return (
        <section className='Service-cards mt-12'>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center'>
                    <h1 className='md:text-xlarge text-basic text-center font-bold text-primary mb-16 max-w-[620px]'>What’s Included with Our WordPress <span className='bg-gradient rounded-full text-[#1D49C3] pt-2 font-bold '>Maintenance Services?
                    </span> </h1>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <div key={service.id} className="space-y-5">
                            <div className='flex mb-3'>
                                <img src={service.icon} alt="" className='h-16' />
                            </div>
                            <h3 className="md:text-base text-medium font-bold text-primary">{service.title}</h3>
                            <p className="text-primary font-normal lg:text-medium text-small md:leading-7" dangerouslySetInnerHTML={{ __html: service.description }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services