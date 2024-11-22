import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogPage.css'; // Importing the CSS file for styling

const BlogPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState('');

    // Fetch all posts from the backend
    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/posts');
            setPosts(response.data.posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    // Handle form submission for new posts
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            setMessage('Title and Content are required.');
            return;
        }
        try {
            await axios.post('http://localhost:5000/posts', { title, content });
            setMessage('Post created successfully!');
            setTitle('');
            setContent('');
            fetchPosts(); // Refresh posts list after new post creation
        } catch (error) {
            setMessage('Error creating post.');
        }
    };

    // Handle post deletion
    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/posts/${id}`);
            fetchPosts(); // Refresh the list of posts
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    // Fetch posts when the component mounts
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="blog-page-container">
            {/* Blog Post Form */}
            <div className="form-container">
                <h2>Create a New Blog Post</h2>
                {message && <p className="message">{message}</p>}
                <form onSubmit={handleSubmit} className="post-form">
                    <div className="form-field">
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <label>Content:</label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Create Post</button>
                </form>
            </div>

            {/* Blog Posts List */}
            <div className="posts-container">
                <h2>Blog Posts</h2>
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post.id} className="post-card">
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-content">{post.content}</p>
                            <div className="post-footer">
                                <small className="post-date">
                                    Posted on {new Date(post.created_at).toLocaleString()}
                                </small>
                                <button 
                                    onClick={() => deletePost(post.id)} 
                                    className="delete-btn"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-posts">No posts available.</p>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
