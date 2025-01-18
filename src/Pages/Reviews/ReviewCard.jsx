import React, { useState, useEffect } from 'react';
import google from "../../assets/images/google.svg";
import { FaStar } from "react-icons/fa";


const ReviewCard = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('reviews.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);



    if (loading) {
        return <div className="text-center py-12">Loading reviews...</div>;
    }
    if (error) {
        return <div className="text-center py-12">Error: {error.message}</div>;
    }


    return (
        <section className='py-12 bg-[#f6f6fc]'>
            <div className='container mx-auto px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-4 rounded-medium shadow-main transition-shadow duration-300 justify-center flex flex-col"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    className="size-14 rounded-full mr-4 object-cover"
                                    src={review.image}
                                    alt={review.name}
                                />
                                <div className='flex-1 space-y-1'>
                                    <h3 className="text-lg text-primary font-medium">{review.name}</h3>
                                    <div className="flex items-center text-yellow-500">
                                        {Array(review.stars).fill().map((_, index) => (
                                            <FaStar key={index} />
                                        ))}
                                    </div>
                                </div>
                                <span className="ml-auto">
                                    <img src={google} alt="google logo" className='h-10 opacity-70' />
                                </span>
                            </div>
                            <p className="text-[#020D0AB2] text-small flex-grow mt-2 leading-relaxed">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewCard;