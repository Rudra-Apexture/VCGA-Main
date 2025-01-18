import React, { useState, useEffect } from 'react';
import Emma from "../../assets/images/Emma-Scott.png";
import ELiam from "../../assets/images/Liam-Williams.png";
import Sophia from "../../assets/images/Sophia-Lopez.png";
import Ryan from "../../assets/images/Ryan-Clark.png";
import { IoClose } from "react-icons/io5";


const teamMembers = [
    {
        id: 1,
        name: "Emma Scot",
        title: "Co-Founder & Lead WordPress Developer",
        image: Emma,
        description:
            "With over 10 years of experience in web development, Emma is the technological heart of VCGA. She started with a mission to make WordPress management easy.",
    },
    {
        id: 2,
        name: "Liam Williams",
        title: "Co-Founder & Digital Marketing Expert",
        image: ELiam,
        description:
            "Liam is a highly skilled digital marketer with a passion for WordPress. He co-founded VCGA with the vision of simplifying web management for everyone.",
    },
    {
        id: 3,
        name: "Sophia Lopez",
        title: "WordPress Support Lead",
        image: Sophia,
        description:
            "Sophia leads our WordPress support team, ensuring our clients get the help they need to succeed. She's a dedicated and knowledgeable expert.",
    },
    {
        id: 4,
        name: "Ryan Clark",
        title: "Content Manager & WordPress Educator",
        image: Ryan,
        description:
            "Ryan creates educational content and manages our website to provide insightful information for our customers.",
    },
];

const LeadershipTeam = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);


    const openModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isModalOpen]);


    return (
        <section className={`LeaderShip-Team md:py-12`}>
            <div className="container mx-auto p-8">
                {/* Heading Section */}
                <div className="text-center mb-8 space-y-2">
                    <h3 className="md:text-base text-medium text-[#8C919B] font-semibold">VCGA leadership</h3>
                    <h1 className="text-large font-bold text-primary">
                        Meet VCGA’s{' '}
                        <span className="bg-gradient rounded-full text-[#1D49C3] leading-10 font-bold py-1 px-2">
                            senior leadership team
                        </span>
                    </h1>
                </div>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:space-y-0 space-y-5">

                    {teamMembers.map(member => (
                        <div key={member.id} className="flex flex-col items-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-xl object-cover w-full h-60 mb-4 cursor-pointer"
                                onClick={() => openModal(member)}
                            />
                            <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                            <p className="text-xs font-medium text-primary text-center">{member.title}</p>
                        </div>
                    ))}


                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedMember && (
                <div
                    className="fixed top-0 left-0 w-full sm:block hidden h-full lg:flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out"
                    style={{ opacity: isModalOpen ? 1 : 0 }}
                >
                    <div
                        className="bg-white p-8 rounded-md shadow-lg w-3/4 max-w-2xl transform transition-transform duration-500 ease-in"
                        style={{ transform: isModalOpen ? 'translateY(0)' : 'translateY(-100px)' }}
                    >

                        {/* Modal Header + Close Button */}
                        <div className="flex justify-between items-center mb-4">
                            {/* Empty div to occupy space */}
                            <div></div>
                            <button onClick={closeModal} className="text-primary focus:outline-none">
                                <IoClose
                                    className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Modal Content (Image and Text) */}
                        <div className="flex gap-6">
                            <div className="w-1/3">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="rounded-md object-cover h-48 w-full"
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="text-base font-bold mb-2 text-[#1C181D]">{selectedMember.name}</h2>
                                <p className="text-medium text-[#1C181D] font-normal mb-4">{selectedMember.title}</p>
                                <p className='text-medium text-[#1C181D] font-medium'>
                                    {selectedMember.description}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default LeadershipTeam;