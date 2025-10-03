import styles from "./Service2Main.module.css";
import ServicesHeader from "../Service/ServicesHeader";
import ServiceCard from "../Service/ServicesCard";
import ServiceCard2 from "./Service2";
// import vector1 from "../../assets/Pop and Palm/Home Page Vector/Vector 2.svg";
// import vector2 from "../../assets/Pop and Palm/Home Page Vector/Vector 3.svg";

function MainService2({ tagline, title, description, section }) {
  if (!section || section.length === 0) return null;

  return (
    <div className={styles.servicesSection}>
      <ServicesHeader preTitle={tagline} title={title} subtitle={description} />

      <div className={styles.cardGrid}>
        {section.map((service, index) => (
          <ServiceCard2
            key={index}
            service={service} // This passes the object containing image, title, tags, and backSideContent
          />
        ))}
      </div>

      {/* <div className={styles.vector}>
        <img src={vector1} alt="vector1" />
        <img src={vector2} alt="vector2" />
      </div> */}
    </div>
  );
}

export default MainService2;
