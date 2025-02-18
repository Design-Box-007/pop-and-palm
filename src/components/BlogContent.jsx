import React from 'react'

const BlogContent = ({ blog }) => {
    return (
        <section id='top'>
            <div className='blog-image-container'>
                <img src={blog.imgSrc} alt="" className="blog-image" />
            </div>
            <h1 className='blog-title'>{blog.title}</h1>
            <div className='blog-hr' />
            {/* blogcontent */}
            <blog.blogContent />

            <div className='blog-end-cta'>
                <h4>
                    Plan your cultural events with Pop and Palm. Contact us to learn more!
                </h4>
                <a href='https://us.bigin.online/org868107012/forms/enquiry-form' target='_blank' rel="noopener noreferrer">
                    <button className='button-primary'>Contact Us</button>
                </a>
            </div>
        </section>
    )
}

export default BlogContent