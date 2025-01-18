import React from 'react';

const HeroSection = () => {
    return (
        <section className='services-hero'>
            <div className="bg-light-blue lg:py-20 py-16 text-white">
                <div className="max-w-7xl mx-auto md:space-y-8 space-y-4 px-4">
                    <h2 className="lg:text-basic text-base font-bold text-center">Services</h2>
                    <h1 className="lg:text-[55px] md:text-4xl text-xlarge leading-[56px] font-bold text-white text-center">
                        WordPress {' '}
                        <span className="bg-gradient-2 rounded-full pt-2 font-bold">
                            Maintenance Service
                        </span>{' '}
                    </h1>
                    <div className='flex justify-center'>
                        <p className="mb-8 md:text-medium text-small md:max-w-[700px] md:leading-7 font-medium text-center">
                            Are you struggling to manage WordPress? Let us handle all the technical
                            details with 24/7 support, giving you a hassle-free website that will
                            effortlessly grow your business.
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <button className="bg-white text-light-blue text-center font-medium py-4 px-6 rounded-xl lg:block hidden">Get Started Now!</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;