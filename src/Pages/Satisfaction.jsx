import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Tom from "../assets/images/Tom.jpg";
import John from "../assets/images/John-Taylor.jpg";
import Sarah from "../assets/images/Sarah-Mitchell-1.jpg";
import James from "../assets/images/James-Collins-1.jpg";
import Raju from "../assets/images/raju.jpg";
import { FaStar } from "react-icons/fa6";
import google from "../assets/images/google.svg";


const Satisfaction = () => {
    const swiperRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: 'James Collins',
            rating: 5,
            review:
                'My site traffic has increased dramatically since working with this service, and their optimization efforts have made my site much faster. I\'ve never had to wait more than a few hours right now please sele is open create now...',
            image: Tom,
        },
        {
            id: 2,
            name: 'Tom Díaz',
            rating: 4,
            review:
                'As a blogger, I spent too much time updating plugins and dealing with minor issues that slowed down my site. After using their WordPress maintenance service for just 2 months, my site is now 40% working with full functional...',
            image: John,
        },
        {
            id: 3,
            name: 'John Taylor',
            rating: 5,
            review:
                'Their WordPress consistency services are excellent! I have never experienced any downtime since I signed up, and my e-commerce site is always current. The ideal solution is the best of life for this website right now...',
            image: Sarah,
        },
        {
            id: 4,
            name: 'Alice Smith',
            rating: 4,
            review:
                'I had a fantastic experience with [business/service name]! The team was professional, friendly, and went above and beyond to meet my expectations. The quality of the service/product was excellent, and everything...',
            image: James,
        },
        {
            id: 5,
            name: 'Emily Wilson',
            rating: 5,
            review:
                'Absolutely loved my experience with [business/service name]! The staff was incredibly friendly and attentive, making me feel valued. The quality of the service/product exceeded my expectations. Everything was delivered....',
            image: Raju,
        },
    ];

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);

    return (
        <section className="Satisfaction-Card">
            <div className="container mx-auto">
                <div className="flex items-center md:justify-between justify-center">
                    <h1 className="md:text-xlarge text-basic font-bold text-primary">
                        Voices of{' '}
                        <span className="bg-gradient rounded-full text-[#1D49C3] pt-2 font-bold ">
                            Satisfaction
                        </span>{' '}
                    </h1>
                    <button className="px-8 py-3.5 bg-light-blue text-white font-bold text-medium rounded-md hidden md:block">
                        Explore All Reviews
                    </button>
                </div>
                <div className="relative py-12 p-10 bg-[#f6f6fc]">
                    <button
                        onClick={handlePrev}
                        className="absolute md:-left-1 left-2 top-1/2 transform -translate-y-1/2 z-20 p-1.5 bg-light-blue rounded-full focus:outline-none"
                    >
                        <FaArrowLeftLong className="md:size-6 size-4 text-white " />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute  md:-right-1 right-2 top-1/2 transform -translate-y-1/2 z-20 p-1.5 bg-light-blue rounded-full focus:outline-none"
                    >
                        <FaArrowRightLong className="md:size-6 size-4 text-white " />
                    </button>

                    <Swiper
                        ref={swiperRef}
                        slidesPerView={3}
                        spaceBetween={20}
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="swiper-slide-custom">
                                <div className="bg-white rounded-medium shadow-main border border-gray-300 md:p-6 p-4 flex flex-col space-y-5 w-full">
                                    <div className="flex items-center md:justify-between justify-center">
                                        <div className="flex items-center flex-col lg:flex-row space-y-2.5">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="rounded-full md:size-16 size-16 object-cover mr-2.5"
                                            />
                                            <div className="flex flex-col space-y-1 md:items-start items-center">
                                                <h4 className="text-medium font-medium text-primary ">
                                                    {testimonial.name}
                                                </h4>
                                                <div className="flex">
                                                    <FaStar className="text-yellow-300" />
                                                    <FaStar className="text-yellow-300" />
                                                    <FaStar className="text-yellow-300" />
                                                    <FaStar className="text-yellow-300" />
                                                    <FaStar className="text-yellow-300" />
                                                </div>
                                            </div>
                                        </div>

                                        <img src={google} alt="Google" className="md:size-10 size-8 md:block hidden" />
                                    </div>
                                    <p
                                        className="lg:text-medium font-medium md:text-start text-center text-primary overflow-hidden overflow-ellipsis"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 10,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {testimonial.review}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Satisfaction;