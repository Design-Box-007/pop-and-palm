import { Link } from "react-router-dom";
import icons from "../../Icon/Icon";
import styles from "./ServicesCard.module.css";

function ServiceCard({ service, showAsDescription = false }) {
  const { image, title, tags } = service;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link to={`services/${title}`}>
          <img src={image} alt={title} className={styles.image} />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.titleArrow}>
          <h3 className={styles.title}>{title}</h3>
          <span>
            <Link to={`services/${title}`}>
              <img src={icons.icon1} alt="icon" />
            </Link>
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
