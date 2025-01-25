import React from 'react';

const HighlightedHeading = ({ mainText, highlightedText, textSize = 'xlarge', center = false }) => {
    const alignmentClass = center ? 'text-center' : '';
    return (
        <h1 className={`md:text-${textSize} text-large font-bold text-primary  ${alignmentClass}`}>
            {mainText} <span className='bg-gradient rounded-full text-[#1D49C3] py-0.5 font-bold'>{highlightedText}</span>
        </h1>
    );
};

export default HighlightedHeading;