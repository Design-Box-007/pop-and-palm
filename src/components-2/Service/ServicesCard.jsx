import { Link } from "react-router-dom";
import icons from "../../Icon/Icon";
import styles from "./ServicesCard.module.css";
import { HashLink } from "react-router-hash-link";

const handleBlogRedirect = () => {
  window.scrollTo(0, 0);
  console.log("Scrolled to top"); // Log a message to confirm the function is called
};

function ServiceCard({ service, showAsDescription = false }) {
  const { image, title, tags } = service;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <HashLink smooth to={`services/${title}#top`}>
          <img src={image} alt={title} className={styles.image} onClick={handleBlogRedirect}/>
        </HashLink>
      </div>

      <div className={styles.content}>
        <div className={styles.titleArrow}>
          <h3 className={styles.title}>{title}</h3>
          <span>
            <HashLink smooth to={`services/${title}#top`}>
              <img src={icons.icon1} alt="icon" className={styles.icon} onClick={handleBlogRedirect}/>
            </HashLink>
          </span>
        </div>

        {tags &&
          tags.length > 0 &&
          (showAsDescription ? (
            <div className={styles.description}>{tags.join(", ")}</div>
          ) : (
            <div className={styles.tagsContainer}>
              <div className={styles.tags}>
                {tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ServiceCard;
