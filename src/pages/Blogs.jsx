import React from 'react'
import BlogHeroSection from '../components/BlogHeroSection'
import BlogsGrid from '../components/BlogsGrid'
import { Helmet } from 'react-helmet-async'

const Blogs = () => {
    return (
        <section className='blog'>
            <Helmet>
                <title>Blogs | Pop & Palm</title>
                <meta name='description' content='Best Event Decor in Dubai, Event Management Company in Dubai.' />
            </Helmet>
            <BlogHeroSection />
            <BlogsGrid />
        </section>
    )
}

export default Blogs