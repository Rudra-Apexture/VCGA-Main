import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticlesAndCategories = async () => {
            try {
                const [postsResponse, categoriesResponse] = await Promise.all([
                    axios.get('https://vcga.uk/wp-json/wp/v2/posts?_embed'),
                    axios.get('https://vcga.uk/wp-json/wp/v2/categories')
                ]);

                const articlesData = postsResponse.data.map(article => ({
                    id: article.id,
                    title: article.title.rendered,
                    excerpt: article.excerpt.rendered,
                    date: new Date(article.date).toLocaleDateString(),
                    image: article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url : 'placeholder.jpg',
                    categories: article.categories,
                    content: article.content.rendered
                }));

                setArticles(articlesData);
                setCategories([{ id: 0, name: 'All Posts' }, ...categoriesResponse.data.map(cat => ({ id: cat.id, name: cat.name }))]);
            } catch (err) {
                setError(err);
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticlesAndCategories();
    }, []);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}, Please try again later.</div>;
    }

    const filteredArticles = activeCategory === 0
        ? articles
        : articles.filter(article => article.categories.includes(activeCategory));

    return (
        <section className="blog-articles md:pt-10 pt-5">
            <div className="container mx-auto">
                <h2 className="text-4xl text-primary font-bold">Recent articles</h2>
                <div className="category-tabs my-5">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className={`border px-4 py-2 font-medium rounded-full hover:border-primary transition-colors duration-300 ease-in-out ${activeCategory === category.id ? 'bg-black text-white border-black' : 'border-gray-300 text-primary'}`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {filteredArticles.length === 0 ? (
                    <p className="text-center text-gray-500">There are no posts in this category.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid */}
                        {filteredArticles.map((article) => (
                            <Link key={article.id} to={`/blog/${article.id}`} className="group space-y-3">
                                <div className="relative overflow-hidden rounded-lg shadow-md">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <p className="text-gray-500 font-normal text-medium ">
                                    {article.categories.length > 0 && categories.find(cat => cat.id === article.categories[0])?.name || 'Uncategorized'}
                                </p>
                                <h3 className="text-medium font-bold text-primary leading-6" dangerouslySetInnerHTML={{ __html: article.title }}></h3>
                                <p className="text-gray-700 font-normal text-small" dangerouslySetInnerHTML={{ __html: article.excerpt }}></p>
                                <div className='border-t border-gray-300'></div>
                                <div className="flex items-center mt-2">
                                    <FaRegClock className="text-gray-500 mr-1" />
                                    <p className="text-gray-500 text-xs font-medium">{article.date}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Articles;