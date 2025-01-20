import React from 'react';
import HighlightedHeading from '../components/HighlightedHeading';

const Trusted = () => {
    const data = [
        {
            id: 1,
            value: "98%",
            description: "98% happiness score with 5+ years of WordPress expertise.",
        },
        {
            id: 2,
            value: "1.5k",
            description: "1.5k projects delivered on time, guaranteed issue-free.",
        },
        {
            id: 3,
            value: "5sec",
            description: "Need help? Wait less than 5 seconds for instant customer service.",
        },
    ];


    return (
        <section className="bg-white lg:py-12">
            <div className="container mx-auto">
                <HighlightedHeading
                    mainText="Your Trusted Partner in "
                    highlightedText="WordPress Care"
                    center={true}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                    {data.map(item => (
                        <div key={item.id} className="flex flex-col items-center justify-center space-y-5">
                            <span className="lg:text-5xl text-large font-semibold text-primary">{item.value}</span>
                            <p className="text-center lg:text-medium font-medium text-primary max-w-64">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Trusted;