import React from 'react'
import hero from "../assets/images/Hero-section.png";
import HighlightedHeading from '../components/HighlightedHeading'; // Adjust path


const MainHeroSection = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto flex items-center justify-between">

                {/* <!-- Left Content --> */}
                <div className="lg:w-1/2 w-full my-5 lg:mb-0 space-y-7">
                    <h1 className="md:text-3xl text-basic lg:text-5xl font-bold text-[#1B1D22] leading-tight md:leading-snug lg:leading-[55px]">
                        Secure Your WordPress Site and Watch Your <span className='bg-gradient rounded-full text-[#1D49C3] px-2  font-semibold'>Business</span> Growing.–Effortless.
                    </h1>
                    <p className="text-[#213343] font-medium text-lg max-w-[500px]">Say goodbye to WordPress headaches! Our low-cost
                        expert services keep your site secure, fast, and updated so
                        that you can focus on business growth with peace of mind.
                    </p>
                    <a href="#" className="bg-[#1D49C3] text-white px-7 py-3.5 text-medium rounded-md inline-block font-medium hover:bg-blue-900 transition-colors duration-200">Get Expert Care Now</a>
                </div>

                {/* <!-- Right Image Container --> */}
                <div className="lg:w-1/2 flex flex-col">
                    <img src={hero} alt="Main-Image" className='lg:block hidden' />
                </div>

            </div>

        </section>
    )
}

export default MainHeroSection