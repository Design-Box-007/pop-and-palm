import styles from "./Services.module.css";
import ServicesHeader from "../Service/ServicesHeader";
import ServiceCard from "../Service/ServicesCard";

function MainService({ tagline, title, description, section, showAsDescription = false }) {
  if (!section || section.length === 0) return null;

  return (
    <div className={styles.servicesSection}>
      <ServicesHeader preTitle={tagline} title={title} subtitle={description} />

      <div className={styles.cardGrid}>
        {section.map((service, index) => (
          <ServiceCard
            key={index}
            service={{
              image: service.image,
              title: service.title,
              tags: service.tags,
            }}
            showAsDescription={showAsDescription}
          />
        ))}
      </div>
    </div>
  );
}

export default MainService
