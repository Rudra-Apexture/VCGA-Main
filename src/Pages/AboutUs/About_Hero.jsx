import React from 'react';

const About_Hero = () => {
    return (
        <section className='CaseStudies-hero'>
            <div className="bg-light-blue lg:py-24 py-16 text-white">
                <div className="max-w-7xl mx-auto md:space-y-10 space-y-8 px-4">
                    <h1 className="lg:text-[55px] md:text-4xl text-xlarge leading-[56px] font-bold text-white text-center">
                        About {' '}
                        <span className="bg-gradient-2 rounded-full pt-2 font-bold">
                            VCGA
                        </span>{' '}
                    </h1>
                    <div className='flex justify-center'>
                        <p className="mb-8 md:text-medium text-small max-w-5xl md:leading-7 font-medium text-center">
                            we make businesses shine by providing expert WordPress maintenance, smart strategies, and continuous support for creating something unique and unstoppable in the digital platform.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About_Hero;