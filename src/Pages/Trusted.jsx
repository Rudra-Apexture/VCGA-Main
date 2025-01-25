import React from 'react';
import HighlightedHeading from '../components/HighlightedHeading';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Trusted = () => {
    const data = [
        {
            id: 1,
            value: 98,
            suffix: "%",
            description: "98% happiness score with 5+ years of WordPress expertise.",
        },
        {
            id: 2,
            value: 1500,
            suffix: "k",
            description: "1.5k projects delivered on time, guaranteed issue-free.",
        },
        {
            id: 3,
            value: 10,
            suffix: "sec",
            description: "Need help? Wait less than 10 seconds for instant customer service.",
        },
    ];

    const { ref, inView } = useInView({
        threshold: 1, // Start animation when 10% of the component is visible
        triggerOnce: true, // Only trigger once
    });

    return (
        <section className="bg-white lg:py-12" ref={ref}>
            <div className="container mx-auto">
                <HighlightedHeading
                    mainText="Your Trusted Partner in "
                    highlightedText="WordPress Care"
                    center={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                    {data.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center space-y-5">
                            <CountUp
                                start={0}
                                end={inView ? item.value : 0}
                                duration={5} // Animation duration in seconds
                                separator=","
                                suffix={item.suffix}
                                className="lg:text-5xl text-large font-semibold text-primary"
                            />
                            <p className="text-center lg:text-medium font-medium text-primary max-w-64">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trusted;