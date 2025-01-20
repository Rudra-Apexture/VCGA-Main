import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Services_Home from '../Pages/Services/Services_Home';
import Case_Home from '../Pages/CaseStudies/Case_Home';
import Review_Home from '../Pages/Reviews/Review_Home';
import About_Home from '../Pages/AboutUs/About_Home';
import Privacy from '../Pages/PrivacyPolicy';
import TermService from '../Pages/TermService.jsx';

const Website_Route = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/services" element={<Services_Home />} />
                    <Route exact path="/case-studies" element={<Case_Home />} />
                    <Route exact path="/reviews" element={<Review_Home />} />
                    <Route exact path="/about-us" element={<About_Home />} />
                    <Route exact path="/privacy-policy" element={<Privacy />} />
                    <Route exact path="/term-service" element={<TermService />} />
                </Routes>
                <Footer />
            </BrowserRouter>

        </>
    )
}

export default Website_Route