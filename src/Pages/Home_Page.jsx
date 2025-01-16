import React from 'react'
import Hero_Section from './Hero_Section'
import Care from './Care'
import Trusted from './Trusted'
import YourChoice from './YourChoice'
import Pricing from './Pricing'
import Satisfaction from './Satisfaction'
import CaseStudies from './CaseStudies'
import FAQ from './FAQ'
import Blog from './Blog'
import footer from "./Footer"
import Footer from './Footer'

const Home_Page = () => {
    return (
        <div>
            <Hero_Section />
            <Care />
            <Trusted />
            <YourChoice />
            <Pricing />
            <Satisfaction />
            <CaseStudies />
            <FAQ />
            <Blog />
            <Footer />
        </div>
    )
}

export default Home_Page