import React from 'react';

const BlogReply = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Leave a Reply</h2>
            <p className="text-sm text-gray-600 mb-4">
                Your email address will not be published. Required fields are marked *
            </p>

            <form>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-primary text-sm font-medium mb-1">
                        Comment *
                        </label>
                    <textarea
                        id="comment"
                        rows="5"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Type your comment here..."
                    />
                </div>

                <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
                        <label htmlFor="name" className="block text-primary text-sm font-medium mb-1">
                            Name *
                            </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="email" className="block text-primary text-sm font-medium mb-1">
                            Email *
                            </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="saveInfo"
                        className="mr-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                    />
                    <label htmlFor="saveInfo" className="text-gray-700 text-sm">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>


                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Post Comment
                </button>
            </form>
        </div>
    );
};

export default BlogReply;