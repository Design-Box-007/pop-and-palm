import React from 'react';

const formatRichText = (text) => {
    if (!text) return "";
    // Convert **bold** to <strong>bold</strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Convert *italic* to <em>italic</em>
    formatted = formatted.replace(/\*(.*?)\*/g, "<em>$1</em>");
    return formatted;
};

// Render paragraphs matching the exact structure and 20px font style of Blog48
const renderParagraphs = (paragraphText) => {
    if (!paragraphText) return null;

    // Split by double newlines or multiple newlines into distinct paragraphs
    const paras = paragraphText
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean);

    if (paras.length === 0) {
        return (
            <p>
                <span
                    style={{ fontSize: "20px" }}
                    dangerouslySetInnerHTML={{
                        __html: formatRichText(paragraphText.replace(/\n/g, "<br />")),
                    }}
                />
            </p>
        );
    }

    return paras.map((pText, pIdx) => (
        <p key={pIdx}>
            <span
                style={{ fontSize: "20px" }}
                dangerouslySetInnerHTML={{
                    __html: formatRichText(pText.replace(/\n/g, "<br />")),
                }}
            />
        </p>
    ));
};

const BlogContent = ({ blog }) => {
    if (!blog) return null;

    return (
        <section id='top'>
            <div className='blog-image-container'>
                <img src={blog.imgSrc || blog.imageUrl} alt={blog.title} className="blog-image" />
            </div>
            <h1 className='blog-title'>{blog.title}</h1>
            <div className='blog-hr' />

            {/* Dynamic vs Static Content Rendering */}
            <div className='blog-content-body'>
                {blog.blogContent && typeof blog.blogContent === 'function' ? (
                    /* Legacy Static JSX Blog Component */
                    <blog.blogContent />
                ) : blog.sections && Array.isArray(blog.sections) && blog.sections.length > 0 ? (
                    /* Dynamic Structured Sections formatted identically to Blog48 */
                    <div className='dynamic-blog-sections'>
                        {blog.sections.map((section, idx) => (
                            <React.Fragment key={idx}>
                                {section.heading && (
                                    idx === 0 ? (
                                        <h2
                                            dangerouslySetInnerHTML={{ __html: formatRichText(section.heading) }}
                                        />
                                    ) : (
                                        <h3
                                            dangerouslySetInnerHTML={{ __html: formatRichText(section.heading) }}
                                        />
                                    )
                                )}
                                {section.paragraph && renderParagraphs(section.paragraph)}
                                {section.bullets && (
                                    <ul style={{ fontSize: "20px" }} className='blog-bullet-list'>
                                        {section.bullets
                                            .split('\n')
                                            .map((b) => b.trim())
                                            .filter(Boolean)
                                            .map((bullet, bIdx) => (
                                                <li
                                                    key={bIdx}
                                                    dangerouslySetInnerHTML={{
                                                        __html: formatRichText(bullet.replace(/^[-*•]\s*/, ''))
                                                    }}
                                                />
                                            ))}
                                    </ul>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                ) : blog.content ? (
                    /* Dynamic HTML / Text content */
                    <div className='dynamic-blog-html'>
                        {renderParagraphs(blog.content)}
                    </div>
                ) : (
                    <p>
                        <span style={{ fontSize: "20px" }}>{blog.description}</span>
                    </p>
                )}
            </div>

            <div className='blog-end-cta'>
                <h4>
                    Plan your cultural events with Pop and Palm. Contact us to learn more!
                </h4>
                <a href='https://whatsform.com/LW55pG' target='_blank' rel="noopener noreferrer">
                    <button className='button-primary'>Contact Us</button>
                </a>
            </div>
        </section>
    );
};

export default BlogContent;