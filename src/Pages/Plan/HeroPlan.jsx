import React from 'react';
import Hero from '../../components/Hero'; // Adjust the path based on where you saved your Hero component

const HeroPlan = () => {
    return (
        <div>
            {/* Hero Section for Services */}
            <Hero
                mainHeading="Transparent Pricing. "
                mainHeadingHighlight="Exceptional Quality. "
                description="Are Your WordPress success starts here – clear pricing, customized solutions, and outstanding results, with guaranteed performance and expert support every step."
                buttonText="Get Started Now!"
            />
        </div>
    );
};

export default HeroPlan;