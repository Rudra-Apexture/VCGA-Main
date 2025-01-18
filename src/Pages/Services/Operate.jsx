import React from 'react'
import setting from "../../assets/images/setting.svg";
import massage from "../../assets/images/massage.svg";
import upchart from "../../assets/images/upchart.svg";

const Operate = () => {
    return (
        <section className='operate-service pt-12'>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center'>
                    <h1 className='md:text-xlarge text-basic text-center font-bold text-primary mb-16 max-w-[650px]'>WordPress Website Maintenance Service -  <span className='bg-gradient rounded-full text-[#1D49C3] pt-2 font-bold '>How We Operate
                    </span> </h1>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Service 1 */}
                    <div className="text-center md:space-y-5 space-y-3">
                        <div className="flex justify-center">
                            <img src={setting} alt="Help-setting" className='md:h-16 h-12' />
                        </div>
                        <h3 className="md:text-base text-medium font-bold text-primary">Plans That Fit Your Needs</h3>
                        <p className="md:text-medium text-small font-medium text-primary">
                            Choose the ideal plan for your website from our affordable
                            <span className="font-bold text-primary"> WordPress maintenance service </span>
                            options. More unique ideas for it.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="text-center space-y-5">
                        <div className="flex justify-center">
                            <img src={massage} alt="Help-setting" className='md:h-16 h-12' />
                        </div>
                        <h3 className="md:text-base text-medium font-bold text-primary">Get Expert Advice to Begin</h3>
                        <p className="md:text-medium text-small font-medium text-primary">
                            We’ll connect to understand your website’s needs and set up automated <span className='text-primary font-bold'>solutions for seamless , </span> secure performance.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="text-center space-y-5">
                        <div className="flex justify-center">
                            <img src={upchart} alt="Help-setting" className='md:h-16 h-12' />
                        </div>
                        <h3 className="md:text-base text-medium font-bold text-primary">PlGrow Your Business, Stress-Free</h3>
                        <p className="md:text-medium text-small font-medium text-primary">
                            Have a coffee while our experts tackle website problems, securing and <span className='text-primary font-bold'>optimizing your site</span>  for flawless performance.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Operate