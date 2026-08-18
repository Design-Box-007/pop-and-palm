import React, { useState, useEffect } from "react";
import styles from "./Diaries.module.css";
import DiariesHeader from "./DiariesHeader";
import { blogData } from "../../data/blogsData";
import { BlogCard } from "./BlogCard1";
import AnimatedWrapper from "../Animation/AnimatedWrapper1";
import { getAllBlogs } from "../../services/blogService";

function Diaries() {
  const [blogs, setBlogs] = useState([...blogData].reverse().slice(0, 3));

  useEffect(() => {
    getAllBlogs()
      .then((data) => {
        if (data && data.length > 0) {
          setBlogs(data.slice(0, 3));
        }
      })
      .catch((err) => {
        console.warn("Could not load dynamic blogs in Diaries, using fallback:", err);
      });
  }, []);

  return (
    <AnimatedWrapper type="fadeUp" delay={0.2}>
      <div className={styles.servicesSection}>
        <DiariesHeader title={"Event Diaries"} />

        <div className={styles.cardGrid}>
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id || index}
              imgSrc={blog.imgSrc || blog.imageUrl}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default Diaries;
