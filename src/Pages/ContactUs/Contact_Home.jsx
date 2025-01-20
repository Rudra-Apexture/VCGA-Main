import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <section className="bg-[#E2EBFF] py-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-between md:flex-row flex-col">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6 max-w-lg">
                        <h2 className="text-light-blue text-5xl font-bold">Contact Us</h2>
                        <p className="text-primary text-medium leading-relaxed">
                            Have questions about our WordPress maintenance plans? Want to discuss how we can
                            keep your site secure, fast, and updated? Fill out the form below or reach out to
                            us using any of the options provided. We're here to help!
                        </p>
                        <div className="space-y-4">
                            <p className="text-primary text-medium">info@vcga.com</p>
                            <p className="text-primary text-medium">323-456-986</p>
                        </div>
                        <div className='pt-10'>
                            <h3 className="text-primary text-basic font-bold mb-2">Follow Us on Social Media</h3>
                            <div className="flex space-x-2.5">
                                <a href="#" className="bg-[#CDDCFF] rounded-lg p-4 text-primary hover:bg-light-blue hover:text-white transition ease-in duration-300">
                                    <FaFacebookF className='size-5' />
                                </a>
                                <a href="#" className="bg-[#CDDCFF] rounded-lg p-4 text-primary hover:bg-light-blue hover:text-white transition ease-in duration-300">
                                    <FaTwitter className='size-5' />
                                </a>
                                <a href="#" className="bg-[#CDDCFF] rounded-lg p-4 text-primary hover:bg-light-blue hover:text-white transition ease-in duration-300">
                                    <FaLinkedinIn className='size-5' />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white rounded-medium p-6 max-w-md">
                        <h3 className="text-primary text-base font-bold mb-4">
                            Get in Touch with Our WordPress Experts
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-small font-medium">Name*</label>
                                <input type="text" id="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-small font-medium">Email*</label>
                                <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 text-small font-medium">Subject*</label>
                                <input type="text" id="subject" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-gray-700 text-small font-medium">Website URL (Optional)</label>
                                <input type="text" id="website" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 text-small font-medium">Message</label>
                                <textarea id="message" rows="5" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white font-medium py-3 px-6 rounded-xl hover:bg-blue-600 focus:outline-none">
                                Send My Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;