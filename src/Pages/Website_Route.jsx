import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Services_Home from './Services/Services_Home';

const Website_Route = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/services" element={<Services_Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>

        </>
    )
}

export default Website_Route