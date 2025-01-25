import React from 'react'
import HighlightedHeading from '../components/HighlightedHeading'
import BlogList from '../components/BlogList'

const Blog = () => {
    return (
        <section className='Blogs pb-12'>
            <div className='container mx-auto'>
                <div className="flex lg:flex-row flex-col items-center justify-between lg:space-y-0 space-y-5 pb-12">
                    <HighlightedHeading
                        mainText="Read our latest "
                        highlightedText="Articles, Resources, And Guides "
                        center={true}
                    />
                    <button className='bg-light-blue px-10 py-3 text-medium capitalize text-white hover:bg-blue-700 rounded-xl'>
                        visit our blogs
                    </button>
                </div>
            </div>
            <BlogList />
        </section>
    )
}

export default Blog