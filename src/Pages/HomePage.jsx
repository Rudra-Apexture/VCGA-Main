import React from 'react'
import MainHeroSection from './MainHeroSection'
import Care from './Care'
import Trusted from './Trusted'
import YourChoice from './YourChoice'
import Pricing from './Pricing'
import Satisfaction from './Satisfaction'
import CaseStudies from './CaseStudies'
import FAQ from './FAQ'
import Blog from './Blog'

const Home_Page = () => {
    return (
        <>
            <MainHeroSection />
            <Care />
            <Trusted />
            <YourChoice />
            <Pricing />
            <Satisfaction />
            <CaseStudies />
            <FAQ />
            <Blog />
        </>
    )
}

export default Home_Page