import React from 'react';
import meetup from "../../assets/images/Frame-2.png";
import HighlightedHeading from '../../components/HighlightedHeading';

const Journey = () => {
    return (
        <section className="journey-About py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 items-center gap-8">
                    {/* Text content */}
                    <div className="space-y-4 text-primary text-medium font-medium">
                        <HighlightedHeading mainText="Join Our " highlightedText="Journey " center={false} />
                        <p>
                            Whether you’re a new user just getting started with WordPress or an experienced pro searching for expert support, we are here to help. Be part of the thousands of users who trust us to keep your WordPress sites running smoothly and efficiently.
                        </p>
                        <p>
                            Explore our tutorials, blog posts, and services today, and let us help you make the most out of your WordPress site!
                        </p>
                        <p>
                            Thanks for taking the time to check this out, and we look forward to seeing you on our blog soon!
                        </p>
                        <button className="bg-light-blue text-white font-bold text-medium py-3 px-10 rounded-xl hover:bg-blue-600 focus:outline-none">
                            Contact us
                        </button>
                    </div>

                    {/* Image */}
                    <div className="Image-wrap">
                        <img
                            src={meetup}
                            alt="Team Working Together"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;