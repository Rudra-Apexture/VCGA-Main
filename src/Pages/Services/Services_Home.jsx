import React from 'react'
import Hero_Section from '../Services/HeroSection'
import Operate from './Operate'
import Plan from './Plan'
import Services from './Services'
import ClientStory from './ClientStory'
import Expert from './Expert'

const Services_Home = () => {
    return (
        <main>
            <Hero_Section />
            <Operate />
            <Plan />
            <Services />
            <ClientStory />
            <Expert />
        </main>
    )
}

export default Services_Home