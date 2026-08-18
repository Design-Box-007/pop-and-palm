import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug } from '../services/blogService';
import BlogContent from '../components/BlogContent';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const { blogName } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const post = await getBlogBySlug(blogName);
                setBlog(post);
            } catch (err) {
                console.error("Error loading blog post:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [blogName]);

    if (loading) {
        return (
            <section className='blog text-center py-5'>
                <div className="spinner-border text-warning" role="status" style={{ width: "3rem", height: "3rem" }}>
                    <span className="visually-hidden">Loading article...</span>
                </div>
            </section>
        );
    }

    if (!blog) {
        return (
            <section className='blog text-center py-5'>
                <div className="container">
                    <h2 className="mb-3">Article Not Found</h2>
                    <p className="text-muted mb-4">The blog post you are looking for might have been moved or removed.</p>
                    <Link to="/blog" className="btn btn-warning font-weight-bold">
                        Browse All Articles
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className='blog'>
            <Helmet>
                <title>{blog.metaTitle || blog.title} | Pop & Palm</title>
                <meta name='description' content={blog.metaDescription || blog.description} />
            </Helmet>
            <BlogContent blog={blog} />
        </section>
    );
};

export default Blog;