import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    // Form Input State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        website: '',
        message: '',
    });
    const [errors, setErrors] = useState({});


    //Handle Input Change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Clear specific error when the user starts to type in that field
        setErrors({ ...errors, [id]: '' });

    };


    //Validation function
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        //Validate Name
        if (!formData.name.trim()) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }
        //Validate Email
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false
        }

        //Validate Subject
        if (!formData.subject.trim()) {
            tempErrors.subject = 'Subject is required';
            isValid = false
        }

        //Validate Website
        if (!formData.website.trim()) {
            tempErrors.website = "Website URL is Required"
            isValid = false;
        }

        //Validate Message
        if (!formData.message.trim()) {
            tempErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (validateForm()) {
            //Simulate form submmison (replace with API Call)
            setTimeout(() => {
                toast.success('Form submitted Successfully!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
                //Reset form on success
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    website: '',
                    message: '',
                });
            }, 1000)
        } else {
            toast.error('Please fix the errors in the form!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }
    }

    return (
        <section className="bg-[#E2EBFF] py-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-between lg:flex-row flex-col">
                    {/* Left Side - Text Content */}
                    <div className="md:space-y-6 space-y-4 lg:max-w-lg">
                        <h2 className="text-light-blue md:text-5xl text-xlarge font-bold">Contact Us</h2>
                        <p className="text-primary md:text-medium text-small font-medium">
                            Have questions about our WordPress maintenance plans? Want to discuss how we can
                            keep your site secure, fast, and updated? Fill out the form below or reach out to
                            us using any of the options provided. We're here to help!
                        </p>
                        <div className="space-y-3">
                            <p className="text-primary  text-medium">info@vcga.com</p>
                            <p className="text-primary  text-medium">323-456-986</p>
                        </div>
                        <div className='py-10'>
                            <h3 className="text-primary text-basic font-bold mb-2">Follow Us on Social Media</h3>
                            <div className="flex space-x-2.5">
                                <a href="https://www.facebook.com/" className="bg-[#CDDCFF] rounded-lg md:p-4 p-2.5 text-primary hover:bg-light-blue hover:text-white transition ease-in duration-300">
                                    <FaFacebookF className='size-4' />
                                </a>
                                <a href="https://x.com/home/" className="bg-[#CDDCFF] rounded-lg md:p-4 p-2.5 text-primary hover:bg-light-blue hover:text-white transition ease-in duration-300">
                                    <FaTwitter className='size-4' />
                                </a>
                                <a href="https://www.linkedin.com/" className="bg-[#CDDCFF] rounded-lg md:p-4 p-2.5 text-primary hover:bg-light-blue hover:text-white transition ease-in duration-300">
                                    <FaLinkedinIn className='size-4' />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form-Field */}
                    <div className="bg-white rounded-3xl md:p-10 p-4 lg:max-w-lg">
                        <h3 className="text-primary text-base font-bold mb-4">
                            Get in Touch with Our WordPress Experts
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-2 text-primary">
                            <div>
                                <label htmlFor="name" className="block font-medium">Name*</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-xl ${errors.name ? 'border-red-500' : ''
                                        }`}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block  font-medium">Email*</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`mt-0.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-xl ${errors.email ? 'border-red-500' : ''
                                        }`}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="subject" className="block  font-medium">Subject*</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={`mt-0.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-xl ${errors.subject ? 'border-red-500' : ''
                                        }`}
                                />
                                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                            </div>
                            <div>
                                <label htmlFor="website" className="block  font-medium">Website URL*</label>
                                <input type="text" id="website" value={formData.website}
                                    onChange={handleInputChange}
                                    className={`mt-0.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-xl ${errors.website ? 'border-red-500' : ''
                                        }`} />
                                {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block  font-medium">Message*</label>
                                <textarea id="message" rows="5" value={formData.message}
                                    onChange={handleInputChange}
                                    className={`mt-0.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-xl resize-none ${errors.message ? 'border-red-500' : ''
                                        }`}></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <button type="submit" className="bg-light-blue text-white w-full md:py-4 py-2.5 md:text-medium font-bold rounded-xl hover:bg-blue-500 focus:outline-none">
                                Send My Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;