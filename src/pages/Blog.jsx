import React from 'react'
import { useParams } from 'react-router-dom';
import { parseBlogUrl } from '../utils/blogURLGenerator';
import BlogContent from '../components/BlogContent';

const Blog = () => {

    const { blogName } = useParams();

    const matchedBlog = parseBlogUrl(blogName);

    return (
        <section className='blog'>
            <BlogContent blog={matchedBlog} />
        </section>
    )
}

export default Blog