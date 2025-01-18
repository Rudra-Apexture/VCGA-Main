import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Services_Home from '../Pages/Services/Services_Home';
import Case_Home from '../Pages/CaseStudies/Case_Home';
import Review_Home from '../Pages/Reviews/Review_Home';

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
                </Routes>
                <Footer />
            </BrowserRouter>

        </>
    )
}

export default Website_Route