import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import catcha from "../../assets/images/recatcha.png";
import { Check, Loader2 } from "lucide-react";
import Review from './Review';

const Contact = () => {
    const [status, setStatus] = useState("idle");

    const handleClick = () => {
        if (status === "idle") {
            setStatus("loading");
            setTimeout(() => setStatus("checked"), 1000);
        }
    };

    // Form Input State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        website: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    //Handle Input Change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        // Clear specific error when the user starts to type in that field
        setErrors({ ...errors, [id]: '' });

    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!formData.subject.trim()) {
            tempErrors.subject = 'Subject is required';
            isValid = false;
        }
        if (!formData.website.trim()) {
            tempErrors.website = "Website URL is Required"
            isValid = false;
        }
        if (!formData.message.trim()) {
            tempErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateForm(); // Validate form
        if (isValid && !isSubmitting) {
            setIsSubmitting(true);
            try {
                const response = await fetch(
                    "https://script.google.com/macros/s/AKfycbxbXucJkwfB9zFoRyzfS_fJHWWNvADmxJBQWiE_src/dev",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    }
                );

                if (response.ok) {
                    toast.success("Form submitted Successfully!", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                    });
                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        website: "",
                        message: "",
                    });
                    setErrors({});
                } else {
                    toast.error("Failed to submit the form!", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                    });
                    console.error("Failed to submit the form:", response.statusText);
                }
            } catch (error) {
                toast.error("An error occurred during form submission!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
                console.error("Error during form submission:", error);
            }
            finally {
                setIsSubmitting(false)
            }
        } else {
            toast.error('Please fix the errors in the form!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
            });
        }
    };


    return (
        <>
            <section className="bg-[#E2EBFF] py-10">
                <div className="container mx-auto">
                    <div className="flex justify-between lg:flex-row flex-col">
                        {/* Left Side - Text Content */}
                        <div className="md:space-y-6 space-y-4 lg:max-w-lg">
                            <h2 className="text-light-blue md:text-5xl text-large font-bold">Contact Us</h2>
                            <p className="text-primary md:text-medium text-small font-normal leading-5 md:leading-6">
                                Have questions about our WordPress maintenance plans? Want to discuss how we can
                                keep your site secure, fast, and updated? Fill out the form below or reach out to
                                us using any of the options provided. We're here to help!
                            </p>
                            <div className="space-y-3 flex flex-col">
                                <a href='mailto:info@vcga.com' className="text-medium font-normal text-primary">info@vcga.com</a>
                                <a href='tel:8849498140' className="text-medium text-primary font-normal">+91 884-949-8140</a>
                            </div>
                            <div className='py-10'>
                                <h3 className="text-primary md:text-basic text-base font-bold mb-4 md:text-left text-center">Follow Us on Social Media</h3>
                                <div className='flex justify-center md:justify-start gap-5'>
                                    <a href="https://www.facebook.com/people/VCGA/61572283934920/" className='md:p-3 p-2 bg-[#3B5998] rounded-md hover:bg-blue-700 transition-all ease-in duration-200'>
                                        <FaFacebook className='md:size-6 size-4 text-white' />
                                    </a>
                                    <a href="https://www.linkedin.com/company/vcgauk/about/?viewAsMember=true" className='md:p-3 p-2 bg-[#0077B5] rounded-md hover:bg-sky-700 transition-all ease-in duration-200'>
                                        <FaLinkedin className='md:size-6 size-4 text-white' />
                                    </a>
                                    <a href="https://x.com/VCGAPVTLTD" className='md:p-3 p-2 bg-black rounded-md hover:bg-dark-black transition-all ease-in duration-200'>
                                        <FaXTwitter className='md:size-6 size-4 text-white' />
                                    </a>
                                    <a href="mailto:info@vcga.com" className='md:p-3 p-2 bg-[#EA4335] rounded-md hover:bg-red-700 transition-all ease-in duration-200'>
                                        <GrMail className='md:size-6 size-4 text-white' />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form-Field */}
                        <div className="bg-white rounded-3xl md:p-10 p-4 lg:max-w-md">
                            <h3 className="text-primary text-base font-bold mb-4">
                                Get in Touch with Our WordPress Experts
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-3 text-primary">
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
                                        className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-xl ${errors.email ? 'border-red-500' : ''
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
                                        className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-xl ${errors.subject ? 'border-red-500' : ''
                                            }`}
                                    />
                                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                                </div>
                                <div>
                                    <label htmlFor="website" className="block  font-medium">Website URL(Optional)</label>
                                    <input type="text" id="website" value={formData.website}
                                        onChange={handleInputChange}
                                        className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-xl ${errors.website ? 'border-red-500' : ''
                                            }`} />
                                    {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block  font-medium">Message</label>
                                    <textarea id="message" rows="5" value={formData.message}
                                        onChange={handleInputChange}
                                        className={`mt-1.5 p-3 w-full border hover:border-black transition-all ease-in duration-200 border-gray-300 rounded-xl resize-none ${errors.message ? 'border-red-500' : ''
                                            }`}></textarea>
                                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                                </div>

                                <div className="flex items-center justify-between space-x-5 p-2.5 border rounded-lg shadow-md md:w-80 w-full bg-white">
                                    <div className='flex gap-2 items-center'>
                                        <button

                                            className="size-7 p-0.5 border-2 border-gray-400 rounded flex items-center justify-center"
                                        >
                                            {status === "loading" && <Loader2 className="size-6 animate-spin text-gray-600" />}
                                            {status === "checked" && <Check className="size-6 text-green-600" />}
                                        </button>
                                        <span className="text-primary text-sm font-medium cursor-pointer" onClick={handleClick}>I'm not a robot</span>
                                    </div>
                                    <div className="ml-auto flex flex-col items-center space-x-1 text-[10px]">
                                        <img src={catcha} alt="" className='size-8' />
                                        <span className="text-gray-500">reCAPTCHA</span>
                                        <p className='cursor-pointer'><a target='_blank' href='https://policies.google.com/privacy?hl=en' className="text-primary font-medium hover:underline">Privacy - </a> <a target='_blank' href='https://policies.google.com/terms?hl=en' className="text-primary font-medium hover:underline">Terms</a></p>
                                    </div>
                                </div>

                                <button type="submit" disabled={isSubmitting} className={`bg-light-blue text-white w-full md:py-4 py-2.5 font-medium rounded-lg hover:bg-[#103498] transition-all ease-in duration-200 focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                    {isSubmitting ? "Sending..." : "Send My Request"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Review />
        </>
    );
};

export default Contact;