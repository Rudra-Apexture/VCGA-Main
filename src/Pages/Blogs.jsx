import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blog from "../assets/Images/blog.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('/blog.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false)
      }
    };
    fetchBlogData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section className="blog py-12 relative">
        <div className="container mx-auto">
          <div className="absolute left-1/2 top-[0px] -z-10 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-t from-blue-100 via-[#ff99b6] blur-[80px] max-w-full"></div>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center items-center">
              <img src={blog} alt="" className="w-40 h-auto" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-gt font-bold text-dark-color">
                Insta Advice{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#a2a9ff] to-[#3f3dcc] ">
                  Blog
                </span>
              </h2>
              <p className="text-light-color text-lg md:text-xl font-medium mt-6 ">
                Your ultimate guide to Instagram growth: Tips, tricks, and
                insights from the UpGrow team. Crack the Code to Organic
                Instagram Growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 sm:mt-20 mt-16 gap-6">
            {blogPosts && blogPosts.length > 0 ? (
              blogPosts.map((post, index) => (
                <Link to={`/blog/${post.slug}`} key={index} className="rounded-t-xl border border-gray-300 rounded-2xl overflow-hidden shadow-md block hover:shadow-xl transition-all ease-in duration-300">
                  <img
                    src={post.image}
                    alt="Blog Post"
                    className="w-full h-[300px] object-cover rounded-t-xl hover:scale-105 transition-all duration-300 ease-in-out"
                  />

                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[#6B7280] font-normal text-[18px] ">{post.date}</span>
                      <span className="bg-[#D946EF] hover:bg-[#7e3af2] transition-all duration-200 ease-in text-white text-xs font-medium px-2.5 py-0.5 rounded-xl">
                        {post.category}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {post.title}
                      </h2>
                      <p className="text-gray-700 text-[18px] mt-4">{post.content}</p>
                      <div className="mt-10 flex justify-end relative">
                        {/* <button className="px-8 py-2 border-[1.5px] border-blue-300  hover:bg-blue-300 hover:text-white font-medium transition-all duration-200 ease-in rounded-lg">
                          Read More
                        </button> */}
                        <button className="button flex items-center gap-4">
                          Read More
                          <FaArrowRightLong className="size-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div>No blog posts found</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blogs;


// ff9cb8 -> pink background