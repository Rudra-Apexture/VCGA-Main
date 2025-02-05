import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CaseStudy = () => {
    const [caseStudies, setCaseStudies] = useState([]);

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setCaseStudies(data);
            } catch (error) {
                console.error("Error fetching case studies:", error);
            }
        };

        fetchCaseStudies();
    }, []);

    return (
        <section className='Case-studies pt-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies.slice(0, 2).map(study => (
                    <Link key={study.id} to={`/case-study/${study.slug}`} className="block">
                        <div className="rounded-medium border border-blue-100 shadow-md overflow-hidden transition-transform duration-300">
                            <div className="relative">
                                <img src={study.image} alt={study.title} className="object-cover w-full h-64 lg:h-full" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>  {/* Dark Gradient Overlay */}
                            </div>
                            <div className="md:p-6 p-4 space-y-5">
                                <h2 className="lg:text-base text-small font-bold text-primary">{study.title}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {study.tags.map((tag, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className={`inline-block border border-slate-300 rounded-full px-3 py-2 lg:text-small text-sm font-medium text-primary`}
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                <div className="inline-flex gap-2 items-center relative cursor-pointer">
                    <span className="text-light-blue md:text-basic inline-block text-base font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-light-blue after:transition-all after:duration-500 hover:after:w-[45%]">
                        See all case studies
                    </span>
                    <svg className="h-8 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>

            </div>
        </section>
    );
};

export default CaseStudy;