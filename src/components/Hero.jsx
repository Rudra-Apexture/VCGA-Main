import React from 'react';

const Hero = ({
    title,
    mainHeading,
    mainHeadingHighlight,
    description,
    buttonText,
    showButton = true,
    descriptionMaxWidth // Add a prop to control the maximum width
}) => {
    const descriptionStyle = {
        maxWidth: descriptionMaxWidth,
    };


    return (
        <section className='services-hero'>
            <div className="bg-light-blue lg:py-20 py-16 text-white">
                <div className="max-w-7xl mx-auto md:space-y-8 space-y-4 px-4">
                    <h2 className="lg:text-basic text-base font-bold text-center">{title}</h2>
                    <h1 className="lg:text-[55px] md:text-4xl text-xlarge leading-[56px] font-bold text-white text-center">
                        {mainHeading}{' '}
                        <span className="bg-gradient-2 rounded-full pt-2 font-bold">
                            {mainHeadingHighlight}
                        </span>{' '}
                    </h1>
                    <div className='flex justify-center'>
                        <p className="mb-8 md:text-medium text-small md:leading-7 font-medium max-w-[650px] text-center" style={descriptionStyle} >
                            {description}
                        </p>
                    </div>
                    {showButton && (
                        <div className='flex justify-center'>
                            <button className="bg-white text-light-blue text-center font-medium py-4 px-6 rounded-xl lg:block hidden">{buttonText}</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;