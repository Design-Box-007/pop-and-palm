import styles from "./Process.module.css";
import image1 from "../../assets/Pop and Palm/About Us/About us 2.png";
import image2 from "../../assets/Pop and Palm/About Us/About us 3.png";
import arrowIcon from "../../assets/Pop and Palm/Icon/Icon 1.svg";
import icons from "../../Icon/Icon";

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.left}>
          <span className={styles.badge}>
            <span>
              <img src={icons.icon3} alt="icon" />
            </span>
            Our Process
          </span>
          <div className={styles.heading}>
            <h2>How We Bring It All Together</h2>
            <p className={"subtitle"}>
              We begin by listening — to your story, your goals, your audience.
            </p>
          </div>
        </div>
      </div>
      <hr />

      {/* ===== Container 1 ===== */}
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <img src={image1} alt="Discover & Design" className={styles.image} />
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>Discover</h3>
            <p>
              We begin by listening — to your story, your goals, your audience.
            </p>
            <span className={styles.number}>01</span>
          </div>

          <div className={styles.step}>
            <h3>Design</h3>
            <p>
              We begin by listening — to your story, your goals, your audience.
            </p>
            <span className={styles.number}>02</span>
          </div>
        </div>
      </div>

      {/* ===== Container 2 ===== */}
      <div className={styles.container}>
        {/* Image */}
        <div className={styles.imageWrapper}>
          <img src={image2} alt="Plan & Deliver" className={styles.image} />
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>Plan & Prepare</h3>
            <p>
              We begin by listening — to your story, your goals, your audience.
            </p>
            <span className={styles.number}>03</span>
          </div>

          <div className={styles.step}>
            <h3>Deliver & Delight</h3>
            <p>
              We begin by listening — to your story, your goals, your audience.
            </p>
            <span className={styles.number}>04</span>
          </div>

          <button className={styles.cta} onClick={() => window.open("https://whatsform.com/LW55pG", "_blank")}>
            Start Your Journey
            <span>
              <img src={arrowIcon} alt="icon" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
