import React from 'react'
import case1 from "../assets/images/case1.jpg";
import case2 from "../assets/images/case2.jpg";
import HighlightedHeading from '../components/HighlightedHeading';

const CaseStudies = () => {
  return (
    <section className='Case-studies'>
      <div className='container mx-auto'>
        <div className='mb-14'>
          <HighlightedHeading
            mainText="Explore Our "
            highlightedText="Case Studies "
            center={true}
          />
        </div>

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


        <div className="pt-6 inline-flex gap-2 items-center relative cursor-pointer">
          <span className="text-light-blue md:text-basic text-base font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-light-blue after:transition-all after:duration-500 hover:after:w-full">
            See all case studies
          </span>
          <svg className="h-8 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>

      </div>
    </section >
  )
}

export default CaseStudies