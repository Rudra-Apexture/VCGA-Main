import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png";
import { FaChevronUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { fetchCases } from '../Pages/CaseStudies/caseStudyService';

const Footer = () => {
    const [caseStudies, setCaseStudies] = useState([]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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
        <footer className="bg-white py-10 ">
            <div className="mx-auto container">
                <div className='site-footer'>
                    <div className='scroll-top-wrapper'>
                        <a className="scroll-top cursor-pointer">
                            <div className="border border-gray-300 mb-10 flex items-center justify-center relative">
                                <button onClick={scrollToTop} className="text-white text-medium px-1 py-3.5 rounded-xl  absolute -top-10 border border-gray-300 ">
                                    <FaChevronUp className='text-black h-2.5 hover:-translate-y-2 hover:text-light-blue transition-all ease-in duration-300' />
                                </button>
                                <h1 className='absolute top-1 text-[#020D0AB2] font-medium text-nowrap uppercase text-xxs'>Back on top</h1>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center md:flex-row text-primary font-semibold">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="mb-8 md:mb-0 space-y-5">
                            <div className="mb-4">
                                <img src={logo} alt="VCGA Logo" className="lg:h-10 h-8" />
                            </div>
                            <p className="mb-2 max-w-80 text-primary font-normal text-small">We've got backups, updates, and security covered, with hosting included.</p>
                            <p className="text-small font-normal text-primary mb-2">info@vcga.com</p>
                            <p className="text-small text-primary font-normal">323-456-986</p>
                        </div>
                        <div className="">
                            <h4 className="font-normal mb-4 text-[#5E6671]">Site Links</h4>
                            <ul className="space-y-4">
                                <li><Link to="/about-us" className="hover:text-blue-600">About us</Link></li>
                                <li><Link to="/contact-us" className="hover:text-blue-600">Contact us</Link></li>
                                <li><Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link></li>
                                <li><Link to="/term-service" className="hover:text-blue-600">Terms of Service</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-normal mb-4 text-[#5E6671]">Case Studies</h4>
                            <ul className="space-y-4">
                                {caseStudies.map((study) => (
                                    <li key={study.id}>
                                        <Link to={`/case-study/${study.slug}`} className="hover:text-blue-600">
                                            {study.heading}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-normal mb-4 text-[#5E6671]">Resources</h4>
                            <ul className="space-y-4">
                                <li><a href="" className="hover:text-blue-600">Beginner's Guide</a></li>
                                <li><a href="#" className="hover:text-blue-600">Showcase</a></li>
                                <li><a href="#" className="hover:text-blue-600">Plugins & Themes</a></li>
                                <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
                                <li><a href="#" className="hover:text-blue-600">News</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-300 pt-6 flex flex-col md:flex-row  justify-between items-center text-primary">
                    <p className="text-sm mb-4 md:mb-0 text-primary">© 2024 VCGA. All right reserved</p>
                    <div className="flex space-x-5 text-[#5E6671] transition-all ease-in duration-200">
                        <a href="https://www.instagram.com/" target='_blank' className="hover:text-light-blue text-base"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/" target='_blank' className="hover:text-light-blue text-base"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://x.com/home?lang=en" target='_blank' className="hover:text-light-blue text-base"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox" target='_blank' className="hover:text-light-blue text-base"><i className="fa-solid fa-envelope"></i></a>
                        <a href="https://www.youtube.com/" target='_blank' className="hover:text-light-blue text-base"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;