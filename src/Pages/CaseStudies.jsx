import React from 'react'
import case1 from "../assets/images/case1.jpg";
import case2 from "../assets/images/case2.jpg";

const CaseStudies = () => {
  return (
    <section className='Case-studies pb-12'>
      <div className='container mx-auto'>
        <h1 className="md:text-xlarge text-basic font-bold text-primary pb-10">
          Explore Our{' '}
          <span className="bg-gradient rounded-full text-[#1D49C3] pt-2 font-bold ">
            Case Studies
          </span>{' '}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg ">
            <div className="max-h-full">
              <img src={case1} alt="Case Study 1" className="object-cover w-full h-full rounded-xl" />
            </div>
            <h2 className="lg:text-basic text-medium text-primary font-bold mt-4">How CredentOne Elevated Their Online Presence with use here with Our WordPress Maintenance Services</h2>
            <div className="flex flex-wrap mt-6 gap-2">
              <span className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">Business Consultancy</span>
              <span className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">Financial Services</span>
              <span className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">Legacy Planning</span>
            </div>
          </div>

          <div className="bg-white rounded-lg">
            <div className="max-h-full">
              <img src={case2} alt="Case Study 1" className="object-cover w-full h-full rounded-xl" />
            </div>
            <h2 className="lg:text-basic text-medium text-primary font-bold mt-4">How WordPress Expertise Helped Alldaygenericmeds Lead the Online Pharmacy Market</h2>
            <div className="flex flex-wrap mt-6 gap-2">
              <span className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">Health & Wellness</span>
              <span className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">E-commerce
              </span>
              <span className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">Online Pharmacy
              </span>
            </div>
          </div>
        </div>


        <div className="mt-6">
          <a href="#" className="inline-flex items-center text-light-blue gap-2 lg:text-basic text-base font-semibold">
            See all case studies
            <svg className="h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default CaseStudies