import React from 'react';
import girl from "../../assets/images/Frame-1.png";
import letter from "../../assets/images/latter.svg";
import helpline from "../../assets/images/helpline.svg";
import teams from "../../assets/images/teams.svg";

const Card = () => {
    return (
        <div className='container mx-auto'>
            <div className="rounded-medium shadow-main p-4 bg-[#fff] border flex flex-col lg:flex-row items-center justify-around space-y-5">
                {/* Card 1 */}
                <div className="flex flex-col items-center text-center space-y-3">
                    <div>
                        <img src={letter} alt="Policy Icon" className="md:size-10 size-8" />
                    </div>
                    <h3 className="text-light-blue md:text-large text-base font-bold ">30-day</h3>
                    <p className="text-primary font-medium">Refund Policy Assurance</p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center text-center space-y-3">
                    <div>
                        <img src={helpline} alt="Support Icon" className="md:size-10 size-8" />
                    </div>
                    <h3 className="text-light-blue md:text-large text-base font-bold ">24/7/365</h3>
                    <p className="text-primary font-medium">Customer Support</p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center text-center space-y-3">
                    <div>
                        <img src={teams} alt="Team Icon" className="md:size-10 size-8" />
                    </div>
                    <h3 className="text-light-blue md:text-large text-base font-bold">60+</h3>
                    <p className="text-primary font-medium">Expert team members</p>
                </div>
            </div>
        </div>
    )
}


const Expert = () => {
    return (
        <section className='Experts-data pt-12 space-y-5'>
            <Card />
            <div className="bg-gray-100 py-10">
                <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto space-y-5">
                    {/* Right Section - Displayed first on larger screens */}
                    <div className="flex justify-center order-2 xs:mt-10 md:mt-0">
                        <img
                            src={girl}
                            alt="Graph Icon"
                            className="object-cover lg:max-w-lg"
                        />
                    </div>

                    {/* Left Section - Displayed first on smaller screens */}
                    <div className='order-1'>
                        <h1 className="md:text-xlarge text-basic font-bold text-primary text-center lg:text-left  pb-10">
                            Are you ready to hand over WordPress maintenance {' '}
                            <span className="bg-gradient rounded-full text-[#1D49C3] pt-2 font-bold">
                                to the experts?
                            </span>{' '}
                        </h1>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <button className="bg-light-blue text-white md:text-medium text-small font-medium md:px-10 px-6 text-nowrap py-4 rounded-lg hover:bg-blue-700">
                                Sign Up Now!
                            </button>
                            <button className="text-primary font-bold md:text-medium text-small rounded-lg">
                                Chat with Our Expert
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expert;
