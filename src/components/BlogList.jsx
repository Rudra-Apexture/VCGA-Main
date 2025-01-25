import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://vcga.uk/wp-json/wp/v2/posts?_embed');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Transform the WordPress data to match your component's structure
        const transformedBlogs = data.map(post => {
          let imageUrl = 'placeholder_image_url';
          // Check if featured_media exists and is not 0
          if (post.featured_media && post.featured_media !== 0) {
            if (post._embedded && post._embedded['wp:featuredmedia']) {
              const featuredMedia = post._embedded['wp:featuredmedia'];
              // Check if it's an array and has at least one item
              if (Array.isArray(featuredMedia) && featuredMedia.length > 0) {
                imageUrl = featuredMedia[0].source_url
              } else if (featuredMedia.source_url) {
                // Check if it's an object and has the source_url property
                imageUrl = featuredMedia.source_url
              }
            }
          }

          return {
            id: post.id,
            title: post.title.rendered,
            content: post.content.rendered,
            slug: slugify(post.title.rendered),
            author: post._embedded?.author?.[0]?.name || 'Unknown Author',
            date: new Date(post.date).toLocaleDateString(),
            category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
            readTime: `${Math.ceil(post.content.rendered.split(/\s+/).length / 200)} min read`,
            image: imageUrl,
          }

        });
        setBlogs(transformedBlogs);


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
          {blogs[0] && (
            <div className="bg-white">
              <Link to={`/blog/${blogs[0].slug}`} >
                <img src={blogs[0].image} alt="Featured Blog" className="rounded-lg" />
              </Link>
              <div className="space-y-3.5">
                <h1 className="text-medium text-light-blue font-semibold capitalize mt-5">{blogs[0].category}</h1>
                <Link to={`/blog/${blogs[0].slug}`} className="hover:underline">
                  <h2 className="lg:text-basic font-semibold text-primary hover:underline underline-offset-1 hover:decoration-primary">
                    {blogs[0].title}
                  </h2>
                </Link>
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
            <div key={index} className="bg-white flex items-start md:space-x-3 rounded-lg transition-shadow ">
              {/* Images */}
              <div className="lg:min-w-[120px] min-w-[100px] lg:min-h-[120px]">
                <Link to={`/blog/${blog.slug}`} >
                  <img
                    alt="Blog thumbnail"
                    src={blog.image}
                    className="rounded-lg"
                  />
                </Link>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-light-blue">{blog.category}</p>
                <Link to={`/blog/${blog.slug}`} className='hover:underline'>
                  <h3 className="lg:text-base font-medium max-w-md text-primary hover:underline hover:decoration-2 leading-6 hover:decoration-primary">
                    {blog.title}
                  </h3>
                </Link>
                <div className="flex items-center text-[#595F69] font-medium space-x-2 text-xs lg:text-nowrap text-wrap">
                  <p>{blog.author}</p>
                  <span>•</span>
                  <p>{blog.date}</p>
                  <span>•</span>
                  <div className="flex items-center">
                    <p>{blog.readTime}</p>
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