import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BlogTop from './BlogTop';
import { FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { slugify } from '../../../utils';
import BlogReply from './BlogReply';

const BlogDetail = () => {
    const { blogSlug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isTocOpen, setIsTocOpen] = useState(true);
    const navigate = useNavigate();
    const blogContentRef = useRef(null);
    const [tocLinks, setTocLinks] = useState([]);

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?id=${blogSlug}&_embed`);

                if (response.status !== 200) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                if (!response.data || response.data.length === 0) {
                    setError("Post not found.");
                    return;
                }

                const post = response.data[0];

                const transformedBlog = {
                    id: post.id,
                    title: post.title.rendered,
                    content: post.content.rendered,
                    author: post._embedded?.author?.[0]?.name || 'Anonymous',
                    date: new Date(post.date).toLocaleDateString(),
                    readTime: '5 min read',
                    category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
                    image: post.featured_media ? post._embedded?.['wp:featuredmedia']?.[0]?.source_url : null,
                };

                setBlog(transformedBlog);

            } catch (err) {
                console.error("Error fetching blog data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogSlug, navigate]);

    useEffect(() => {
        if (blog && blogContentRef.current) {
            const headings = Array.from(blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6'));
            const newTocLinks = headings.map(heading => ({
                id: slugify(heading.textContent),
                text: heading.textContent
            }));

            setTocLinks(newTocLinks);
            addIdsToHeadings();
        }

    }, [blog])

    const toggleToc = () => {
        setIsTocOpen(!isTocOpen);
    };

    const scrollToSection = (id) => {
        const element = blogContentRef.current.querySelector(`#${id}`);
        if (element) {
            element.scrollIntoView();
        }
    };

    const addIdsToHeadings = () => {
        if (!blog || !blogContentRef.current) return;

        const headings = blogContentRef.current.querySelectorAll('h2, h3, h4, h5, h6');
        headings.forEach((heading) => {
            const slug = slugify(heading.textContent);
            heading.setAttribute('id', slug);
        });
    };

    if (loading) {
        return <p>Loading blog post...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <div className='Blog-Main'>
                <BlogTop />
            </div>
            <div className="container mx-auto py-10">
                <article className='my-12'>
                    <div className="flex flex-col lg:flex-row items-start border-b pb-10">
                        <div className="flex flex-col w-full lg:w-1/4 ">
                            <div className="flex space-x-3">
                                <h1 className="text-primary text-small font-medium flex items-center">Share</h1>
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/share_channel/#"
                                    className="p-2.5 bg-[#3B5998] rounded-md transition-colors"
                                    aria-label="Share on Facebook"
                                >
                                    <FaFacebook className="size-5 text-white" />
                                </a>
                                {/* Twitter */}
                                <a
                                    href="https://x.com/intent/post?url=https%3A%2F%2Fvcga.uk%2Fhow-credentone-elevated-their-online-presence-with-our-wordpress-maintenance-services%2F&=&="
                                    className="p-2.5 bg-black rounded-md transition-colors"
                                    aria-label="Share on Twitter"
                                >
                                    <FaTwitter className="size-5 text-white" />
                                </a>
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fvcga.uk%2Fhow-credentone-elevated-their-online-presence-with-our-wordpress-maintenance-services%2F"
                                    className="p-2.5 bg-[#0077B5] rounded-md transition-colors"
                                    aria-label="Share on LinkedIn"
                                >
                                    <FaLinkedinIn className="size-5 text-white" />
                                </a>
                                {/* Email */}
                                <a
                                    href="mailto:info@vcga.com"
                                    className="p-2.5 bg-[#EA4335] rounded-md transition-colors"
                                    aria-label="Share via Email"
                                >
                                    <FaEnvelope className="size-5 text-white" />
                                </a>
                            </div>
                            <div className='border-t w-60 my-5'>

                            </div>

                            {/* Table-Contents */}
                            <div className='flex space-x-8' onClick={toggleToc} style={{ cursor: "pointer" }}>
                                <h1 className='text-primary font-bold text-small uppercase'>Table of Contents</h1>
                                <IoIosArrowUp className={`size-6 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} />
                            </div>
                            <div
                                className={`space-y-2 py-5 transition-all duration-500 overflow-hidden ${isTocOpen ? 'max-h-[150px]' : 'max-h-0 '
                                    }`}
                            >
                                {tocLinks.map((link) => (
                                    <h1 key={link.id} className='text-primary font-medium text-small cursor-pointer hover:text-blue-500' onClick={() => scrollToSection(link.id)}>{link.text}</h1>
                                ))}
                            </div>
                        </div>

                        <div className="w-full flex lg:w-3/5 flex-col items-center" >
                            {/* Image */}
                            {blog.image && (
                                <div className="mb-6 w-full">
                                    <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg object-cover" />
                                </div>
                            )}

                            {/* Text Content */}
                            <div ref={blogContentRef} className=" text-content max-w-[800px] w-full text-primary font-medium">
                                <div className='blog_content' dangerouslySetInnerHTML={{ __html: blog.content }} />
                            </div>
                        </div>

                    </div>

                </article>
            </div>
            <div className='blog-reply'>
                <BlogReply />
            </div>
        </>
    );
};

export default BlogDetail;

