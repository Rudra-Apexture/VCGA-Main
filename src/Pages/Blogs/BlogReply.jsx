import React, { useState } from 'react';

const BlogReply = () => {
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
        saveInfo: false,
    });
    const [replyingTo, setReplyingTo] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            comment: formData.comment,
            date: new Date().toLocaleString(),
            replyTo: replyingTo,
        };

        if (replyingTo) {
            const updatedComments = comments.map((comment) => {
                if (comment.id === replyingTo) {
                    return { ...comment, replies: [...(comment.replies || []), newComment] };
                }
                return comment;
            });
            setComments(updatedComments);
        } else {
            setComments([...comments, newComment]);
        }

        setFormData({
            name: '',
            email: '',
            comment: '',
            saveInfo: false,
            replyTo: null, // Clear replyingTo after submission
        });
        setReplyingTo(null); // Clear replyingTo after submission
    };

    const handleReply = (commentId) => {
        setReplyingTo(commentId);
    };

    const renderComments = (comments, parentId = null) => {
        return comments.map((comment) => {
            if (comment.replyTo === parentId) {
                return (
                    <div key={comment.id} className="bg-white p-4 rounded mb-4 space-y-2 ml-4 border border-gray-300">
                        <h3 className="text-lg font-medium capitalize">{comment.name} <span className='text-gray-700'>Says : </span></h3>
                        <p className="text-primary font-medium text-2xl capitalize">{comment.comment}</p>
                        <p className="text-xs text-primary">
                            {comment.date}
                        </p>
                        {comment.replies && renderComments(comment.replies, comment.id)}
                        <button onClick={() => handleReply(comment.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reply</button>
                    </div>
                );
            }
            return null;
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-primary mb-2">Leave a Reply</h2>
            <p className="text-small font-normal text-gray-500 mb-4">
                Your email address will not be published. Required fields are marked *
            </p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-primary text-small font-medium mb-1">Comment *</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows="5"
                        value={formData.comment}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:bg-[#f7f7f7] focus:outline-none focus:border-[#2A27E9]"
                    />
                </div>

                <div className="flex flex-wrap -mx-2 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
                        <label htmlFor="name" className="block text-primary text-small font-medium mb-1">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:bg-[#f7f7f7] focus:outline-none focus:border-[#2A27E9]"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="email" className="block text-primary text-small font-medium mb-1">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:bg-[#f7f7f7] focus:outline-none focus:border-[#2A27E9]"
                        />
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="saveInfo"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                        className="mr-2 border border-gray-300 rounded"
                    />
                    <label htmlFor="saveInfo" className="text-primary text-small">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>

                <button type="submit" className="bg-[#2A27E9] text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none">
                    Post Comment
                </button>
            </form>

            <div className="mt-8">
                {renderComments(comments)}
            </div>
        </div>
    );
};

export default BlogReply;