import React from 'react';

const CaseStudyHome = () => {
    return (
        <section className='CaseStudies-hero'>
            <div className="bg-light-blue lg:py-20 py-16 text-white">
                <div className="max-w-7xl mx-auto md:space-y-10 space-y-4 px-4">
                    <h1 className="lg:text-[55px] md:text-4xl text-xlarge leading-[56px] font-bold text-white text-center">
                        Case {' '}
                        <span className="bg-gradient-2 rounded-full pt-2 font-bold">
                            Studies
                        </span>{' '}
                    </h1>
                    <div className='flex justify-center'>
                        <p className="mb-8 md:text-medium text-small md:max-w-[700px] md:leading-7 font-medium text-center">
                            Hear it from the experts! Our case studies combine with real user experiences with impactful stats to show what Vcga.uk can do for you.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default CaseStudyHome;