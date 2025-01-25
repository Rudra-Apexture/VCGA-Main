// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate


// const CaseBlog = () => {
//     const [cases, setCases] = useState([]);
//     const navigate = useNavigate(); // Initialize useNavigate

//     useEffect(() => {
//         fetch(`${import.meta.env.BASE_URL}data.json`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setCases(data);
//             })
//             .catch((error) => console.error("Error fetching blog data:", error));
//     }, []);

//     const handleBlogClick = (caseId) => {
//         navigate(`/case-study/${caseId}`); // Use navigate to redirect to the details page
//     };

//     return (
//         <section className='case-blogs py-12'>
//             <div className='container mx-auto'>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {cases.map((caseItem) => (
//                         <div
//                             key={caseItem.id}
//                             className="bg-white rounded-lg cursor-pointer"  // Add cursor style
//                             onClick={() => handleBlogClick(caseItem.id)} // Add the click handler
//                         >
//                             <div className="max-h-full">
//                                 <img
//                                     src={caseItem.image}
//                                     alt={`Case Study ${caseItem.id}`}
//                                     className="object-cover w-full h-full rounded-xl"
//                                 />
//                             </div>
//                             <h2 className="lg:text-basic text-medium text-primary font-bold mt-4">{caseItem.title}</h2>
//                             <div className="flex flex-wrap mt-6 gap-2">
//                                 {caseItem.tags.map((tag, index) => (
//                                     <span key={index} className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">
//                                         {tag}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CaseBlog;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCases } from './caseStudyService'; // Assuming service file path


const CaseBlog = () => {
    const [cases, setCases] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const loadCases = async () => {
            setLoading(true);
            try {
                const data = await fetchCases();
                setCases(data);
            } catch (err) {
                console.error("Error fetching case data:", err);
                setError("Failed to load case data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadCases();
    }, []);
    const handleBlogClick = (caseSlug) => {
        navigate(`/case-study/${caseSlug}`); // Use navigate to redirect to the details page with slug
    };

    if (error) {
        return (
            <div className="text-red-500 text-center py-8">
                {error}
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => window.location.reload()}>
                    Try Again
                </button>
            </div>
        );
    }
    return (
        <section className='case-blogs py-12'>
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cases.map((caseItem) => (
                        <article
                            key={caseItem.id}
                            className="bg-white rounded-lg cursor-pointer"
                            onClick={() => handleBlogClick(caseItem.slug)} // use the slug now
                        >
                            <div className="max-h-full">
                                <img
                                    src={caseItem.image}
                                    width={400}
                                    height={300}
                                    alt={`Case Study ${caseItem.id}`}
                                    className="object-cover w-full h-full rounded-xl"
                                />
                            </div>
                            <h2 className="lg:text-basic text-medium text-primary font-bold mt-4">{caseItem.title}</h2>
                            <div className="flex flex-wrap mt-6 gap-2">
                                {caseItem.tags.map((tag, index) => (
                                    <span key={index} aria-label={tag} className="inline-block border border-solid border-[#B5B9C4] rounded-full px-3 py-1.5 text-small font-medium text-[#020d0ab2]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default CaseBlog;