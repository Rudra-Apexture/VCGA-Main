import React from 'react'
import HighlightedHeading from '../components/HighlightedHeading'
import BlogList from '../components/BlogList'
import { Link } from 'react-router'

const Blog = () => {
    return (
        <section className='Blogs md:pt-10 pt-5'>
            <div className='container mx-auto'>
                <div className="flex items-center md:justify-between justify-center">
                    <HighlightedHeading
                        mainText="Don’t Miss "
                        highlightedText="These Updates "
                        center={false}
                    />
                    <Link to="/blog" className='bg-light-blue px-10 py-4 text-medium text-white hover:bg-blue-700 rounded-md hidden md:block'>
                        Visit our blogs
                    </Link>
                </div>
            </div>
            <BlogList />
        </section>
    )
}

export default Blog