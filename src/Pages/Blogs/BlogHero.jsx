import React from 'react';
import Hero from '../../components/Hero';


const BlogHero = () => {
    return (
        <Hero
            mainHeading="Level Up Your "
            mainHeadingHighlight="Blogs "
            description="A blog section is a dedicated part of a website where articles, updates, or stories are shared. It typically right then includes a collection of posts with a title."
            showButton={false} // Set showButton to false to hide the button
        />
    );
};

export default BlogHero;

