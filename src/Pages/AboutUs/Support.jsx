import React, { useState, useRef, useEffect } from 'react';

const Support = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
        }
    }, [isExpanded]);

    const containerStyle = {
        maxHeight: contentHeight + 'px',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out',
    };



    return (
        <div className="container mx-auto p-8 ">
            {/* Heading */}
            <h1 className="md:text-xlarge text-large font-bold text-primary pb-5">
                Why{' '}
                <span className="bg-gradient rounded-full text-[#1D49C3] font-bold ">
                    VCGA?
                </span>{' '}
            </h1>

            {/* Paragraph */}
            <p className="text-primary font-medium md:text-base text-medium leading-relaxed mb-6">
                Since we started in 2017, we have successfully assisted thousands of WordPress
                users on everything from fixing small bugs to building completely custom
                solutions. Here's why you should choose VCGA:
            </p>

            {/* Content */}
            <div className="text-primary font-medium md:text-base text-medium space-y-4">
                <p>
                    <span className="font-bold text-primary">Professional Support: </span> Our
                    team consists of WordPress professionals who understand every nook and
                    cranny inside the system. Whether you're struggling with a technical
                    issue or need advice on the best plugins to use, we're here to help.
                </p>
                <p>
                    <span className="font-bold text-primary">Learning Resources:</span> We
                    believe that the users themselves should be empowered with knowledge.
                    Our blog and tutorials are designed to help you learn and grow.
                    Whether it's for beginners, like getting started, or for advanced
                    tips, we make WordPress accessible to everyone.
                </p>

                {/* Additional Content */}
                <div style={containerStyle} ref={contentRef}>
                    {isExpanded && (
                        <>
                            <div className="text-primary font-medium md:text-base text-medium">
                                <p>
                                    <span className="font-bold text-primary">Security & Performance First:</span>
                                    We know how important it is for you to have a fast and secure website.
                                    Our team works diligently to ensure your site is protected against threats and
                                    performs at its best, so you can focus on growing the audience or business.
                                </p>
                            </div>
                            <br />
                            <div className="text-primary font-medium md:text-base text-medium">
                                <p>
                                    <span className="font-bold text-primary ">WordPress Partner for Growth:</span>
                                    VCGA is your dedicated partner for all things WordPress. We offer expert support, from fixing technical issues to building custom solutions. Our resources empower you with knowledge through tutorials and our blog
                                </p>
                            </div>
                            <br />
                            <div className="text-primary font-medium md:text-base text-medium">
                                <p>
                                    <span className="font-bold text-primary">Elevate WordPress Experience:</span>
                                    With VCGA, you gain access to a team of WordPress experts dedicated to your success. We go beyond basic fixes, offering tailored solutions for your unique needs. Learn and grow with our tutorials, ensuring you're in control.
                                </p>
                            </div>
                        </>
                    )}
                </div>

                {/* Read More Button */}
                <button
                    onClick={toggleContent}
                    className="text-primary underline underline-offset-1 font-bold hover:underline focus:outline-none"
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
};

export default Support;