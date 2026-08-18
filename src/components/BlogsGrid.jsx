import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../services/blogService";
import { generateBlogUrl } from "../utils/blogURLGenerator";
import { HashLink } from "react-router-hash-link";

const BlogCard = ({ imgSrc, title, description, slug }) => {
  const blogUrl = slug || generateBlogUrl(title);

  const handleBlogRedirect = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="blog-card">
      <img src={imgSrc} className="blog-card-img-top" alt={title} />
      <div className="blog-card-body">
        <h5 className="blog-card-title">{title}</h5>
        <p className="blog-card-text">{description}</p>
        <HashLink style={{ width: "100%" }} smooth to={`/blog/${blogUrl}#top`}>
          <button
            onClick={handleBlogRedirect}
            className="button-primary blog-redirect-btn"
          >
            Read More &rarr;
          </button>
        </HashLink>
      </div>
    </div>
  );
};

const BlogsGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const data = await getAllBlogs();
        setBlogs(data);
      } catch (err) {
        console.error("Error loading blogs in BlogsGrid:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <section className="blog-grid-container">
      <h2 className="blog-grid-container-title">Recent Posts</h2>
      {loading && blogs.length === 0 ? (
        <div className="text-center py-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading blogs...</span>
          </div>
        </div>
      ) : (
        <div className="blog-grid-container-cards">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id || index}
              imgSrc={blog.imgSrc}
              title={blog.title}
              description={blog.description}
              slug={blog.slug}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogsGrid;

