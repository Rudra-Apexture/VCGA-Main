import React from 'react'
import BlogList from '../../components/BlogList';
import HighlightedHeading from '../../components/HighlightedHeading';

const BlogMain = () => {
    return (
        <div className='my-12'>
            <div className='container mx-auto'>
                <h1 className='md:text-xlarge text-basic lg:text-left text-center font-bold text-primary mb-12 '>Latest  <span className='bg-gradient rounded-full text-[#1D49C3] py-0.5 font-bold '>Updates Here </span> </h1>
            </div>
            <BlogList />
        </div>
    )
}

export default BlogMain