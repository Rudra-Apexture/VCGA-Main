import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const SolutionSection = ({ solution }) => {
    if (!solution) return null;

    return (
        <section className="solution-section py-12">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{solution.title}</h2>
                <p className="text-primary font-medium md:text-medium text-small mb-8 max-w-4xl">{solution.description}</p>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        speed={700}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            320: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {solution.cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-[350px] flex items-center justify-center">
                                    <div className="rounded-medium shadow-main border border-gray-300 p-8 flex flex-col items-center text-center space-y-5 h-full w-full justify-start">
                                        <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                            <img src={card.icon} alt={card.title} className="object-contain w-full h-full" />
                                        </div>
                                        <h3 className="text-base font-bold text-primary">{card.title}</h3>
                                        <p className="text-primary text-small font-medium">{card.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-prev-custom size-8 flex items-center justify-center rounded-md hover:bg-blue-700 transition-all duration-200 ease-in-out bg-[#d9e4ff] backdrop-blur-sm absolute -left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-20">
                            <FaChevronLeft className="text-primary p-0.5 ml-1" />
                        </div>
                        <div className="swiper-button-next-custom size-8 flex items-center justify-center rounded-md hover:bg-blue-700 transition-all duration-200 ease-in-out bg-[#d9e4ff] backdrop-blur-sm absolute -right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-20">
                            <FaChevronRight className="text-primary p-0.5 mr-1" />
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;