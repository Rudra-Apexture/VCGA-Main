import React from 'react'
import image from "../assets/images/blogimage.png";

const Grow = () => {
  return (
    <section className='grow-ready py-12'>
      <div className='container mx-auto'>
        <div className="bg-light-blue rounded-medium flex lg:flex-row flex-col justify-between">
          <div className="lg:w-1/2 w-full">
            <div className="lg:p-20 p-6 text-white lg:text-left text-center ">
              <h2 className="md:text-4xl text-basic font-bold mb-6">Ready to Grow?</h2>
              <p className="text-lg mb-6 lg:max-w-96 w-full">Transform your WordPress website today- together,  we can achieve greatness!</p>
              <button className="bg-white text-light-blue font-bold text-medium py-4 md:w-1/2 w-full mb-6 rounded-xl">Get Started Today</button>
            </div>
          </div>

          <div className="flex flex-wrap lg:w-1/2 w-full">
            <img src={image} alt="Website 1" className="object-cover md:-mt-12 mt-0" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grow