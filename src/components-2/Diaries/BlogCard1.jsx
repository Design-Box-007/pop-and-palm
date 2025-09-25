import { HashLink } from "react-router-hash-link";
import { generateBlogUrl } from "../../utils/blogURLGenerator";

export const BlogCard = ({ imgSrc, title, description }) => {
  const blogUrl = generateBlogUrl(title); // Replace spaces with hyphens

  const handleBlogRedirect = () => {
    window.scrollTo(0, 0);
    console.log("Scrolled to top"); // Log a message to confirm the function is called
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
