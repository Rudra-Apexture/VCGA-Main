import React, { useState, useEffect, useRef, useCallback } from 'react';
import logo from "../assets/images/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isSticky, setIsSticky] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);


    // Using useCallback for memoizing the toggle function
    const toggleMenu = useCallback(() => {
        setIsTransitioning(true);
        setIsMenuOpen(prev => !prev);
    }, []);

    // Using useCallback for memoizing the outside click handler
    const handleClickOutside = useCallback((event) => {
        if (navRef.current && !navRef.current.contains(event.target) && isMenuOpen) {
            setIsTransitioning(true);
            setIsMenuOpen(false);
        }
    }, [isMenuOpen]);

    // Using useCallback for memoizing the scroll handler
    const handleScroll = useCallback(() => {
        setIsSticky(window.scrollY > (isHomePage ? 300 : 100));
    }, [isHomePage]);


    useEffect(() => {
        let timerId;
        if (!isMenuOpen) {
            timerId = setTimeout(() => {
                setIsTransitioning(false);
            }, 300);
        }
        return () => clearTimeout(timerId);
    }, [isMenuOpen]);



    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleClickOutside]);


    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);


    const isActive = useCallback((path) => {
        const currentPath = location.pathname.replace(/\/$/, ""); // Remove trailing slash
        const targetPath = `/${path}`.replace(/\/$/, ""); // Ensure target path starts with "/"
        return currentPath === targetPath; // Exact match for active links
    }, [location.pathname]);


    return (
        <>
            {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-0"></div>}

            <header
                className={`top-0 z-30 relative transition-shadow duration-300 py-4 ${isHomePage
                    ? `${isSticky ? "bg-white shadow-main py-2 " : ""}`
                    : "bg-white shadow-main"
                    }  ${isSticky ? `sticky transition-all duration-300` : ""}`}
            // style={{ transition: 'padding 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out' }}

            >
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={logo} alt="VCGA Logo" className="md:h-11 h-8 mr-2" />
                        </Link>
                    </div>

                    <div className="lg:hidden">
                        {!isMenuOpen ? (
                            <IoMdMenu className='h-6 w-6 cursor-pointer' onClick={toggleMenu} />
                        ) : (
                            <IoClose className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
                        )}
                    </div>

                    <nav className="hidden lg:flex space-x-5 items-center z-10">
                        <Link
                            to="/services"
                            className={`text-primary font-medium text-small hover:text-blues transition-colors duration-200 ${isActive('/services') ? 'text-blues' : ''}`}
                        >
                            Services
                        </Link>

                        <Link
                            to="/case-studies"
                            className={`text-primary font-medium text-small hover:text-blues transition-colors duration-200 ${isActive('case-studies') ? 'text-blues' : ''
                                }`}
                        >
                            Case Studies
                        </Link>
                        <Link
                            to="/blog"
                            className={`text-primary font-medium text-small hover:text-blues transition-colors duration-200 ${isActive('blog') ? 'text-blues' : ''
                                }`}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/reviews"
                            className={`text-primary font-medium text-small hover:text-blues transition-colors duration-200 ${isActive('reviews') ? 'text-blues' : ''
                                }`}
                        >
                            Reviews
                        </Link>
                        <Link
                            to="/about-us"
                            className={`text-primary font-medium text-small hover:text-blues transition-colors duration-200 ${isActive('about-us') ? 'text-blues' : ''
                                }`}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact-us"
                            className={`text-primary font-medium text-small hover:text-blues transition-colors duration-200`}
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/hostadvice"
                            className={`text-primary font-medium text-small hover:text-blues transition-colors duration-200`}
                        >
                            Hostadvice
                        </Link>
                        {/* button */}
                        <Link
                            to="/see-pricing"
                            className="bg-light-blue text-white px-8 py-2.5 rounded-md font-medium hover:bg-blue-900 transition-colors duration-200"
                        >
                            See Plans
                        </Link>
                    </nav>


                    <nav
                        ref={navRef}
                        className={`lg:hidden border-r border-gray-300 fixed top-0 left-0 h-full w-64 bg-white shadow-main transform transition-transform duration-500 ease-in-out flex flex-col p-4 z-30 ${isMenuOpen
                            ? 'translate-x-0'
                            : '-translate-x-full'
                            }
                     ${isTransitioning ? "" : "pointer-events-none"}
                        `}
                    >

                        {isMenuOpen && (
                            <div className="lg:hidden flex justify-end mb-4">
                                <IoClose className="h-8 w-8 cursor-pointer border p-1 rounded-full" onClick={toggleMenu} />
                            </div>
                        )}

                        <Link to="/services" className={`text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0 ${isActive('/services') ? 'text-blues' : ''}`}>Services</Link>
                        <Link to="/case-studies" className={`text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0 ${isActive('/case-studies') ? 'text-blues' : ''}`}>Case Studies</Link>
                        <Link to="/blog" className="text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0">Blog</Link>
                        <Link to="/reviews" className={`text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0 ${isActive('/reviews') ? 'text-blues' : ''}`}>Reviews</Link>
                        <Link to="/about-us" className={`text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0 ${isActive('/about-us') ? 'text-blues' : ''}`}>About Us</Link>
                        <Link to="/contact-us" className="text-primary font-medium text-medium hover:text-blues transition-colors duration-200 mb-4 lg:mb-0">Contact Us</Link>
                        <Link
                            to="/hostadvice"
                            className={`text-primary font-medium text-small hover:text-blues transition-colors duration-200`}
                        >
                            Hostadvice
                        </Link>
                        <a href="#" className="bg-light-blue bottom-2 w-4/5 text-center left-6 absolute inline-block text-white px-6 py-2.5 rounded-xl font-medium text-medium hover:bg-blue-900 transition-colors duration-200 lg:ml-0">See Plans</a>
                    </nav>

                </div>
            </header >
        </>
    );
};

export default Header;