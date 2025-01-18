import React, { useState, useEffect } from 'react';


const CaseBlog = () => {
    const [cases, setCases] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data.json`)
            .then((response) => response.json())
            .then((data) => {
                setCases(data);
            })
            .catch((error) => console.error("Error fetching blog data:", error));
    }, []);

    return (
        <section className='case-blogs py-12'>
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cases.map((caseItem) => (
                        <div key={caseItem.id} className="bg-white rounded-lg">
                            <div className="max-h-full">
                                <img
                                    src={caseItem.image}
                                    alt={`Case Study ${caseItem.id}`}
                                    className="object-cover w-full h-full rounded-xl"
                                />
                            </div>
                            <h2 className="lg:text-basic text-medium text-primary font-bold mt-4">{caseItem.title}</h2>
                            <div className="flex flex-wrap mt-6 gap-2">
                                {caseItem.tags.map((tag, index) => (
                                    <span key={index} className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseBlog;