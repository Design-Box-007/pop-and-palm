import styles from "./Services.module.css";
import ServicesHeader from "../Service/ServicesHeader";
import ServiceCard from "../Service/ServicesCard";
import AnimatedWrapper from "../Animation/AnimatedWrapper2";
import AnimatedWrapper2 from "../Animation/AnimatedWrapper2";
 

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
    </div>
  );
}

export default MainService;
