import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import { IoClose } from "react-icons/io5";
import Emma from "../../assets/images/Emma-Scott.png";
import ELiam from "../../assets/images/Liam-Williams.png";
import Sophia from "../../assets/images/Sophia-Lopez.png";
import Ryan from "../../assets/images/Ryan-Clark.png";

const teamMembers = [
    {
        id: 1,
        name: "Emma Scot",
        title: "Co-Founder & Lead WordPress Developer",
        image: Emma,
        description: "With over 10 years of experience in web development, Emma is the technological heart of VCGA. She started with a mission to make WordPress management easy.",
    },
    {
        id: 2,
        name: "Liam Williams",
        title: "Co-Founder & Digital Marketing Expert",
        image: ELiam,
        description: "Liam is a highly skilled digital marketer with a passion for WordPress. He co-founded VCGA with the vision of simplifying web management for everyone.",
    },
    {
        id: 3,
        name: "Sophia Lopez",
        title: "WordPress Support Lead",
        image: Sophia,
        description: "Sophia leads our WordPress support team, ensuring our clients get the help they need to succeed. She's a dedicated and knowledgeable expert.",
    },
    {
        id: 4,
        name: "Ryan Clark",
        title: "Content Manager & WordPress Educator",
        image: Ryan,
        description: "Ryan creates educational content and manages our website to provide insightful information for our customers.",
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
        setTimeout(() => setSelectedMember(null), 300); // Delay unmounting content
    };

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isModalOpen);
        return () => document.body.classList.remove('overflow-hidden');
    }, [isModalOpen]);

    return (
        <section className="LeaderShip-Team md:pt-10 pt-5">
            <div className="container mx-auto p-8">
                {/* Heading Section */}
                <div className="text-center mb-8 space-y-1">
                    <h3 className="md:text-base text-small text-[#8C919B] font-semibold">VCGA leadership</h3>
                    <h1 className="text-large font-bold text-primary">
                        Meet VCGA’s{' '}
                        <span className="bg-gradient rounded-full text-[#1D49C3] leading-10 font-bold py-1 px-2">
                            senior leadership team
                        </span>
                    </h1>
                </div>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="relative group cursor-pointer">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                src={member.image}
                                alt={member.name}
                                className="rounded-xl object-cover w-full h-60 mb-4 transition-transform"
                                onClick={() => openModal(member)}
                            />
                            <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                            <p className="text-sm font-medium text-primary">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal with Animation */}
            <AnimatePresence>
                {isModalOpen && selectedMember && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="bg-white relative p-8 rounded-lg shadow-lg w-3/4 max-w-2xl"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 150, damping: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            {/* Close Button */}
                            <div className="flex justify-end">
                                <button onClick={closeModal} className="text-primary focus:outline-none">
                                    <IoClose className="size-8 absolute top-0 right-0 bg-light-blue text-white rounded-box" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="flex gap-6">
                                <div className="w-1/3">
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="rounded-md object-cover h-48 w-full"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-lg font-bold text-[#1C181D]">{selectedMember.name}</h2>
                                    <p className="text-medium text-[#1C181D] font-normal mb-4">{selectedMember.title}</p>
                                    <p className='text-medium text-[#1C181D] font-medium'>{selectedMember.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default LeadershipTeam;
