import styles from "./Services.module.css";
import ServicesHeader from "../Service/ServicesHeader";
import ServiceCard from "../Service/ServicesCard";
import AnimatedWrapper2 from "../Animation/AnimatedWrapper2";
// import vector1 from "../../assets/Pop and Palm/Home Page Vector/Vector 2.svg";
// import vector2 from "../../assets/Pop and Palm/Home Page Vector/Vector 3.svg";

function MainService({
  tagline,
  title,
  description,
  section,
  showAsDescription = false,
}) {
  if (!section || section.length === 0) return null;

  return (
    <div className={styles.servicesSection}>
      <ServicesHeader preTitle={tagline} title={title} subtitle={description} />

      <div className={styles.cardGrid}>
        {section.map((service, index) => (
          <AnimatedWrapper2
            key={index}
            animationType="fadeInUp"
            delay={index * 0.15}
          >
            <ServiceCard
              service={{
                image: service.image,
                title: service.title,
                tags: service.tags,
              }}
              showAsDescription={showAsDescription}
            />
          </AnimatedWrapper2>
        ))}
      </div>

      {/* <div className={styles.vector}>
        <img src={vector1} alt="vector1" />
        <img src={vector2} alt="vector2" />
      </div> */}
    </div>
  );
}

export default MainService;
