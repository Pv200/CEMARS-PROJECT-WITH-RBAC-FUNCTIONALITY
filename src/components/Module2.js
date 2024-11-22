import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';

import './Module2.css'; // Importing the CSS file for styling

function Module2() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expandedPost, setExpandedPost] = useState(null); // State to track which post is expanded

    // Fetch blog posts on component mount
    useEffect(() => {
        axios.get('http://localhost:5000/posts')
            .then(response => {
                setPosts(response.data.posts); // Store posts in state
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching posts.');
                setLoading(false);
            });
    }, []);

    const handleReadMore = (postId) => {
        // Toggle the expanded post view
        if (expandedPost === postId) {
            setExpandedPost(null); // Close the post if it's already open
        } else {
            setExpandedPost(postId); // Expand the post
        }
    };

    return (
        <div className="module2-container">
            <h3 className="module2-header">Blog Posts</h3>
            
            {/* Loading, Error, and Posts Display */}
            {loading ? (
                <div className="loading-message">Loading posts...</div>
            ) : error ? (
                <div className="error-message">{error}</div>
            ) : (
                <div className="posts-container">
                    {posts.length === 0 ? (
                        <p className="no-posts-message">No posts available.</p>
                    ) : (
                        posts.map(post => (
                            <div key={post.id} className="post-card">
                                <h4 className="post-title">{post.title}</h4>
                                <p className="post-content">
                                    {expandedPost === post.id
                                        ? post.content // Show full content when expanded
                                        : post.content.substring(0, 200) + '...'} {/* Show preview */}
                                </p>
                                <small className="post-date">
                                    Posted on {new Date(post.created_at).toLocaleString()}
                                </small>
								<br/>
                                <button
                                    className="read-more-btn"
                                    onClick={() => handleReadMore(post.id)} // Toggle post visibility
                                >
                                    {expandedPost === post.id ? 'Read less' : 'Read more'}
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default memo(Module2);
