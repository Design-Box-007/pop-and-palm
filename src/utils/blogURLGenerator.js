import { blogData } from "../data/blogsData";

const generateBlogUrl = (title) => {
    // Remove all special characters, replace spaces with hyphens, and clean up multiple hyphens
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")  // Remove special characters
        .replace(/\s+/g, "-")          // Replace spaces with hyphens
        .replace(/-+/g, "-")           // Replace multiple hyphens with a single hyphen
        .replace(/^-+/, "")            // Remove leading hyphens
        .replace(/-+$/, "");           // Remove trailing hyphens
};

const parseBlogUrl = (blogName) => {

    const matchingBlog = blogData.find(
        (blog) => generateBlogUrl(blog.title) === blogName
    );

    // Return the matching blog or undefined if no match is found
    return matchingBlog ? matchingBlog : undefined;
};

export { generateBlogUrl, parseBlogUrl }