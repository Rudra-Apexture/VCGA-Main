import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { useState, useEffect, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import { BsLink45Deg } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





const BlogDetails = () => {
    const { slug } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blogPosts, setBlogPosts] = useState([]); // Fetch All posts

    const fetchBlogData = useCallback(async () => {
        try {
            const response = await fetch('/blog.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setBlogPosts(data);
            const post = data.find((post) => post.slug === slug);
            if (post) {
                setBlogPost(post);
            } else {
                setError("Blog not found");
            }
        } catch (err) {
            console.error("Error fetching blog data:", err);
            setError("Failed to load blog post. Please try again later.");
        } finally {
            setLoading(false);
        }
    }, [slug]);

    useEffect(() => {
        fetchBlogData();
    }, [fetchBlogData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!blogPost) {
        return <div>Blog not found</div>;
    }

    const breadcrumbItems = [
        { label: "Home", to: "/" },
        { label: "Resources", to: "/blog" },
        { label: blogPost.title },
    ];

    const excludeCurrentPost = blogPosts.filter((post) => post.slug !== slug);

    return (
        <section className="Insta-SinglePage py-10">
            <div className="container mx-auto">
                <div className="space-y-6">
                    <Breadcrumb items={breadcrumbItems} />
                    <h1 className="md:text-5xl text-4xl max-w-2xl capitalize leading-[45px] font-bold text-black">{blogPost.title}</h1>
                    <p className="text-black font-medium md:text-xl text-[16px] max-w-5xl leading-7">{blogPost.content}</p>
                </div>
                <div className="flex items-center my-4 gap-2">
                    <span className="bg-[#D946EF] text-white text-xs font-bold tracking-wide px-3 py-1 rounded-full">
                        {blogPost.category}
                    </span>
                    <span className="size-1 bg-black rounded-full"></span>
                    <span className="text-black font-medium text-sm">{blogPost.date}</span>
                </div>
                {/* Blog-Content */}
                <div className="w-full max-w-3xl mx-auto mt-12">
                    <img
                        src={blogPost.image}
                        alt={blogPost.title}
                        className="w-full object-cover pb-4 rounded-2xl"
                    />
                    {blogPost.contents.map((section, index) => (
                        <BlogSection key={index} section={section} />
                    ))}
                    <div className="mt-10 flex items-center justify-between">
                        <h1 className="text-black font-bold text-2xl ">Share this post</h1>
                        <div className="flex gap-2">
                            <a href="#" className="size-8 bg-[#e6edfc] rounded-md flex justify-center items-center">
                                <BsLink45Deg className="size-6 p-1" />
                            </a>
                            <a href="https://x.com/intent/post?url=https%3A%2F%2Fwww.upgrow.com%2Fblog%2Finstagram-giveaway&text=How%20to%20Run%20a%20Giveaway%20Collaboration%20on%20Instagram%3A%20A%20Step-by-Step%20Guide" className="size-8 bg-[#e6edfc] rounded-md flex justify-center items-center">
                                <FaTwitter className="size-6 p-1" />
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.upgrow.com%2Fblog%2Finstagram-giveaway" className="size-8 bg-[#e6edfc] rounded-md flex justify-center items-center">
                                <FaFacebook className="size-6 p-1" />
                            </a>
                            <a href="https://www.linkedin.com/feed/?shareActive=true&shareUrl=https%3A%2F%2Fwww.upgrow.com%2Fblog%2Finstagram-giveaway" className="size-8 bg-[#e6edfc] rounded-md flex justify-center items-center">
                                <FaLinkedin className="size-6 p-1" />
                            </a>
                        </div>
                    </div>
                </div>
                <RelatedPosts posts={excludeCurrentPost} />
            </div>
        </section>
    );
};

const BlogSection = ({ section }) => {
    if (section.type === "h4") {
        return (
            <h4
                className="heding"
            >
                {section.text}
            </h4>
        );
    } else if (section.type === "p") {
        return (
            <p
                className="text-black font-medium md:text-xl leading-7 mt-4"
            >
                {section.text}
            </p>
        );
    } else if (section.type === "ul") {
        return (
            <ul className="text-black mt-4 ml-5 list-disc list-outside space-y-4">
                {section.items.map((item, itemIndex) => {
                    const parts = item.text.split(':');
                    return (
                        <li key={itemIndex} className="text-black font-normal md:text-[18px] leading-7">
                            {parts.length > 1 ? (
                                <>
                                    <span className="font-bold">{parts[0]}:</span> {parts.slice(1).join(':')}
                                </>
                            ) : (
                                <span>{item.text}</span>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    } else if (section.type === "image") {
        return (
            <div className="mt-4 overflow-hidden rounded-xl">
                <img
                    src={section.url}
                    alt="Blog Section"
                    className="w-full rounded-xl hover:scale-110 transition-all ease-in-out duration-300"
                />
            </div>
        );
    }
    return null;
};

const RelatedPosts = ({ posts }) => {
    return (
        <div className="mt-12">
            <h2 className="md:text-3xl text-2xl font-bold mb-6 text-black text-left">Related posts</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                {posts.slice(0, 3).map((post) => (
                    <div key={post.slug} className="bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden">
                        <Link to={`/blog/${post.slug}`} onClick={() => { window.scrollTo(0, 0) }}>
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover ro"
                            />
                            <div className="p-2 md:p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-[#E74694] text-white text-xs font-medium px-3 py-0.5 rounded-full">{post.category}</span>
                                    <span className="bg-black size-1.5 rounded-full"></span>
                                    <span className="text-black font-normal text-sm">{post.date}</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-black">{post.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default BlogDetails;