import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegUserCircle } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useParams, useNavigate } from 'react-router-dom';

const BlogTop = () => {
    const { blogSlug } = useParams();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchBlog = async () => {

            if (!blogSlug) {
                setLoading(false)
                return;
            }


            setLoading(true);
            setError(null);

            try {

                const response = await axios.get(`https://vcga.uk/wp-json/wp/v2/posts?id=${blogSlug}&_embed`);

                if (response.status !== 200) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const posts = response.data;
                if (posts.length === 0) {
                    setError("Post not found.");
                    return;
                }
                const post = posts[0];

                const transformedBlog = {
                    id: post.id,
                    title: post.title.rendered,
                    author: post._embedded?.author?.[0]?.name || 'Anonymous',
                    date: new Date(post.date).toLocaleDateString(),
                    commentCount: post.comment_status === 'open' ? post.comment_count : 0,
                    category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized'
                };


                setBlog(transformedBlog);

            }
            catch (err) {
                console.error("Error fetching blog data:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogSlug]);


    const truncateTitle = (title, limit = 5) => {
        if (!title) return "";

        const words = title.split(' ');
        if (words.length <= limit) {
            return title;
        }
        return `${words.slice(0, limit).join(' ')}...`;
    };

    const truncatedTitle = blog ? truncateTitle(blog.title) : '';


    return (
        <section className='Hero-section'>
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                </div>
            )}
            {error && <div className="error-message">{error}</div>}
            {!loading && !error && blog && (
                <div className="bg-light-blue lg:py-14 py-16 text-white">
                    <div className="max-w-7xl mx-auto md:space-y-5 space-y-4 px-4">
                        <h2 className="lg:text-small text-xs font-normal text-center flex justify-center items-center gap-2"> <Link to="/" > Home </Link>
                            <span>
                                <FaAngleRight />
                            </span>
                            {truncatedTitle}
                        </h2>
                        <div className='flex justify-center'>
                            <p className="mb-8 md:text-5xl text-small font-bold capitalize max-w-5xl text-center" >
                                {blog.title}
                            </p>
                        </div>
                        <div className='flex justify-center space-x-5'>
                            <h1 className='flex items-center gap-1'>
                                <FaRegUserCircle className='size-4' />
                                <span>{blog.author}</span>
                            </h1>
                            <h3 className='flex items-center gap-1'>
                                <FaCalendar className='size-4' />
                                <span>{blog.date}</span>
                            </h3>
                            <h6 className='flex items-center gap-1'>
                                <IoChatbubbleEllipsesOutline
                                    className='size-4' />
                                <span>{blog.commentCount} Comments</span>
                            </h6>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BlogTop;