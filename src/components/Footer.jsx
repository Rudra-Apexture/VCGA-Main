import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png";
import { FaChevronUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { fetchCases } from '../Pages/CaseStudies/caseStudyService';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const Footer = () => {
    const [caseStudies, setCaseStudies] = useState([]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling
        });
    };

    useEffect(() => {
        const loadCases = async () => {
            try {
                const data = await fetchCases();
                setCaseStudies(data);
            } catch (err) {
                console.error("Error fetching cases:", err);
            }
        };
        loadCases();
    }, []);

    return (
        <footer className="bg-white py-14">
            <div className="mx-auto container">
                <div className='site-footer'>
                    <div className='scroll-top-wrapper'>
                        <a className="scroll-top cursor-pointer">
                            <div className="border border-gray-300 mb-10 flex items-center justify-center relative">
                                <button onClick={scrollToTop} className="text-white text-medium px-1 py-3.5 rounded-xl absolute -top-10 border border-gray-300">
                                    <FaChevronUp className='text-black h-2.5 hover:-translate-y-2 hover:text-light-blue transition-all ease-in duration-300' />
                                </button>
                                <h1 className='absolute top-1 text-dark-black font-medium text-nowrap uppercase text-xxs'>Back on top</h1>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center md:flex-row text-primary font-semibold">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="mb-8 md:mb-0 space-y-5 flex flex-col">
                            <img src={logo} alt="VCGA Logo" className="lg:w-1/2 w-2/3" />
                            <p className="max-w-80 text-primary font-normal text-small">We've got backups, updates, and security covered, with hosting included.</p>
                            <a href='mailto:info@vcga.com' className="text-small font-normal text-primary">info@vcga.com</a>
                            <a href='tel:8849498140' className="text-xs text-primary font-normal">+91 884-949-8140</a>
                        </div>
                        <div>
                            <h4 className="font-normal mb-4 text-light-gray">Site Links</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link to="/about-us" className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                        Contact us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy" className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/term-service" className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-normal mb-4 text-light-gray">Case Studies</h4>
                            <ul className="space-y-4">
                                {caseStudies.map((study) => (
                                    <li key={study.id}>
                                        <Link to={`/case-study/${study.slug}`} className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                            {study.heading}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-normal mb-4 text-light-gray">Resources</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="" className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                        Beginner's Guide
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                        Showcase
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                        Plugins & Themes
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                        Tutorials
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600 transition-all duration-300 hover:translate-x-3 block">
                                        News
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-primary">
                    <p className="text-sm mb-4 md:mb-0 text-primary">© 2024 VCGA. All right reserved</p>
                    <div className="flex space-x-5 text-light-gray transition-all ease-in duration-300">
                        <a href="https://www.facebook.com/people/VCGA/61572283934920/" target='_blank' className="hover:text-light-blue transition-all ease-in duration-200 text-base">
                            <FaFacebookF className='h-5' />
                        </a>
                        <a href="https://www.linkedin.com/company/vcgauk/about/?viewAsMember=true" target='_blank' className="hover:text-light-blue transition-all ease-in duration-200 text-base">
                            <FaLinkedin className='h-5' />
                        </a>
                        <a href="https://x.com/VCGAPVTLTD" target='_blank' className="hover:text-light-blue transition-all ease-in duration-200 text-base">
                            <FaXTwitter className='h-5' />
                        </a>
                        <a href="mailto:info@vcga.com" target='_blank' className="hover:text-light-blue transition-all ease-in duration-200 text-2xl">
                            <IoMdMail className='h-5' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;