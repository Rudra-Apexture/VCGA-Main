import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const isHomePage = location.pathname === "/";


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`top-0 z-30 relative transition-shadow duration-300 py-2 ${isHomePage
                ? `${isSticky ? "bg-white shadow-main sticky py-2 " : ""}`
                : "bg-white/60 shadow-header"
                }  ${isSticky ? `sticky` : ""}`}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* <!-- Logo (Left Side) --> */}
                <div className="flex items-center">
                    <img src={logo} alt="VCGA Logo" className="md:h-10 h-8 mr-2" />
                </div>

                {/* <!-- Mobile Menu Icon --> */}
                <div className="lg:hidden">
                    {!isMenuOpen ? (
                        <IoMdMenu className='h-6 w-6 cursor-pointer' onClick={toggleMenu} />
                    ) : (
                        <IoClose className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
                    )}
                </div>

                {/* <!-- Navigation (Desktop) --> */}
                <nav className="hidden lg:flex space-x-10 items-center z-10">
                    <a href="#" className="text-primary font-medium text-medium  hover:text-blues transition-colors duration-200">Services</a>
                    <a href="#" className="text-primary font-medium text-medium  hover:text-blues transition-colors duration-200">Case Studies</a>
                    <a href="#" className="text-primary font-medium text-medium  hover:text-blues transition-colors duration-200">Blog</a>
                    <a href="#" className="text-primary font-medium text-medium  hover:text-blues transition-colors duration-200">Reviews</a>
                    <a href="#" className="text-primary font-medium text-medium  hover:text-blues transition-colors duration-200">About Us</a>
                    <a href="#" className="text-primary font-medium text-medium  hover:text-blues transition-colors duration-200">Contact Us</a>

                    <a href="#" className="bg-[#1A43B8] text-white px-6 py-2.5 rounded-xl font-medium text-medium hover:bg-blue-900 transition-colors duration-200">See Plans</a>
                </nav>

                {/* <!-- Navigation (Mobile) --> */}

                <nav
                    ref={navRef}
                    className={`lg:hidden border-r border-gray-300 ${isMenuOpen
                        ? ' fixed top-0 left-0 h-full w-64 bg-white shadow-main transform transition-transform duration-300 ease-in-out  flex flex-col p-4 z-30 '
                        : 'hidden transform transition-transform duration-300 ease-in-out z-0'
                        }`}>

                    {/* Mobile Nav Close */}
                    {isMenuOpen && (
                        <div className="lg:hidden flex justify-end mb-4">
                            <IoClose className="h-8 w-8 cursor-pointer border p-1 rounded-full" onClick={toggleMenu} />
                        </div>
                    )}

                    <a href="#" className="text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0">Services</a>
                    <a href="#" className="text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0">Case Studies</a>
                    <a href="#" className="text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0">Blog</a>
                    <a href="#" className="text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0">Reviews</a>
                    <a href="#" className="text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0">About Us</a>
                    <a href="#" className="text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0">Contact Us</a>

                    {/* <!-- Button --> */}
                    <a href="#" className="bg-[#1A43B8] bottom-2 w-4/5 text-center left-6 absolute inline-block text-white px-6 py-2.5 rounded-xl font-medium text-medium hover:bg-blue-900 transition-colors duration-200 lg:ml-0">See Plans</a>
                </nav>

            </div>
        </header>
    );
}

export default Header;