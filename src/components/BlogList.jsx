import React, { useState, useEffect } from 'react';
import wordpressLogo from '../assets/images/wordpress1.webp';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true); // Set loading before fetching
      setError(null); // Reset error on new fetch attempt

      try {
        const response = await fetch(`${import.meta.env.BASE_URL}blogs.json`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data);

      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError(err);

      } finally {
        setLoading(false);
      }
    };


    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!blogs || blogs.length === 0) {
    return <p>No blogs found.</p>;
  }


  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap lg:flex-nowrap gap-10">
        {/* Left Side - Featured Blog */}
        <div className="w-full lg:w-3/5 relative rounded-lg overflow-hidden">
          {blogs[0] && ( // Ensure there is at least one blog
            <div className="bg-white">
              <img src={wordpressLogo} alt="Featured Blog" className='rounded-lg' />
              <div className='space-y-3.5'>
                <h1 className="text-medium text-light-blue font-semibold capitalize mt-5">{blogs[0].category}</h1>
                <h2 className="lg:text-basic font-semibold text-primary hover:underline underline-offset-1 hover:decoration-primary">
                  {blogs[0].title}
                </h2>
                <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs">
                  <p className="underline underline-offset-1">{blogs[0].author}</p>
                  <span>•</span>
                  <p>{blogs[0].date}</p>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <p>{blogs[0].readTime}</p>
                  </div>
                </div>
              </div>
            </div>

          )}
        </div>

        {/* Right Side - Four Blogs */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          {blogs.slice(1, 5).map((blog, index) => (
            <div key={index} className="bg-white flex items-start md:space-x-3 rounded-lg transition-shadow">
              {/* images */}
              <div className='lg:min-w-[120px] min-w-[100px] lg:min-h-[120px]'>
                <img src={blog.image} alt={blog.author} className='lg:size-28 size-20 rounded-lg' />
              </div>
              {/* text-content */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-light-blue">{blog.category}</p>
                <h3 className="lg:text-base font-medium max-w-md text-primary hover:underline hover:decoration-2 leading-6 hover:decoration-primary">{blog.title}</h3>
                <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs lg:text-nowrap text-wrap">
                  <p className="">{blog.author}</p>
                  <span className="">•</span>
                  <p className="">{blog.date}</p>
                  <span className="">•</span>
                  <div className="flex items-center">
                    <p className="">{blog.readTime}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;