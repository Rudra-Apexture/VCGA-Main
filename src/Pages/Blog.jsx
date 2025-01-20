import React from 'react'
import image from "../assets/images/blogimage.png";

const Blog = () => {
  return (
    <section className='blog-data py-12'>
      <div className='container mx-auto'>
        <div className="bg-light-blue rounded-medium lg:flex lg:flex-row lg:justify-between">
          <div className="lg:w-1/2 w-full">
            <div className="md:p-20 p-6 text-white md:text-start text-center">
              <h2 className="md:text-4xl text-basic font-bold mb-6">Ready to Grow?</h2>
              <p className="text-lg mb-6 md:max-w-96 w-full">Transform your WordPress website today- together, we can achieve greatness!</p>
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

export default Blog