import React from 'react';
import logo from "../assets/images/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the very top of the page
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white py-12">
      <div className="mx-auto container">

        <div className="border-b border-gray-300/50 mb-8 flex items-center justify-center relative">
          {/* top-Scroll */}
          <button onClick={scrollToTop} className="text-white bg-light-blue text-medium size-8 rounded-lg absolute -top-4 backdrop-blur-sm  border border-gray-300 ">
            <i className="fas fa-arrow-up align-middle text-medium  flex justify-center items-center"></i>
          </button>
        </div>

        <div className="flex flex-col items-center md:flex-row text-primary font-semibold">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="mb-8 md:mb-0 space-y-5">
              <div className="mb-4">
                <img src={logo} alt="VCGA Logo" className="h-10" />
              </div>
              <p className="mb-2 max-w-80 text-primary font-normal text-medium">We've got backups, updates, and security covered, with free SiteGround hosting included.</p>
              <p className="text-medium font-normal text-primary mb-2">info@vcga.com</p>
              <p className="text-medium text-primary font-normal">323-456-986</p>
            </div>


            <div className="">
              <h4 className="font-semibold mb-4 text-[#5E6671]">Site Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-blue-600">About us</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#5E6671]">Case Studies</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-blue-600">Credentone</a></li>
                <li><a href="#" className="hover:text-blue-600">Alldaygenericmeds</a></li>
                <li><a href="#" className="hover:text-blue-600">RamdootExports</a></li>
                <li><a href="#" className="hover:text-blue-600">Asktraining</a></li>
                <li><a href="#" className="hover:text-blue-600">Coronaria's</a></li>
              </ul>
            </div>


            <div>
              <h4 className="font-semibold mb-4 text-[#5E6671]">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-blue-600">Beginner's Guide</a></li>
                <li><a href="#" className="hover:text-blue-600">Showcase</a></li>
                <li><a href="#" className="hover:text-blue-600">Plugins & Themes</a></li>
                <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
                <li><a href="#" className="hover:text-blue-600">News</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="mt-6 border-t border-gray-200 pt-6 flex flex-col md:flex-row  justify-between items-center text-gray-500">

          <p className="text-sm mb-4 md:mb-0 text-primary">© 2024 VCGA. All right reserved</p>

          <div className="flex space-x-5 text-[#5E6671]">
            <a href="#" className=""><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className=""><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className=""><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className=""><i className="fa-regula  fa-envelope"></i></a>
            <a href="#" className=""><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;