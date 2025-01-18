import React from 'react';

const ReviewHero = () => {
  return (
    <section className='Reviews-hero'>
      <div className="bg-light-blue lg:py-24 py-12 text-white">
        <div className="max-w-7xl mx-auto md:space-y-10 space-y-8 px-4">
          <h1 className="lg:text-[55px] md:text-4xl text-large leading-[50px] text-center  font-bold text-white">
            Hear From Those Who've {' '}
            <span className="bg-gradient-2 rounded-full pt-2 font-bold">
              Grown with VCGA
            </span>{' '}
          </h1>
          <div className='flex justify-center text-center'>
            <p className="mb-8 md:text-medium text-small max-w-6xl font-medium ">
              Real stories, real results—our clients share how we’ve transformed their businesses. From boosting revenue to achieving their goals, their success speaks for itself. See how we’ve helped them grow and succeed with Vcga.uk.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default ReviewHero;