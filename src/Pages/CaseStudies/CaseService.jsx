import React from 'react'
import wordpressSetting from '../../assets/images/wordpressSetting.png';

const CaseService = () => {
    return (
        <section className='Case-service'>
            <div className='py-12'>
                <div className="bg-light-blue py-10">
                    <div className="flex flex-col lg:px-40 px-4 md:flex-row items-center justify-between">
                        <div className="text-white md:text-left md:order-1 order-2">
                            <h2 className='md:text-large text-basic max-w-96 font-bold md:leading-9 mt-4'>Transform Your Website Today with Our Expert WordPress Maintenance Services.</h2>
                            <button className="bg-white text-primary py-3 px-6 mt-4 rounded-md hover:bg-gray-100">Get Expert care</button>
                        </div>
                        <div className="md:order-2 order-1 -mt-24 md:-mt-40">
                            <div className="relative">
                                <div>
                                    <img src={wordpressSetting} alt="setting" className='lg:w-96 w-80' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseService