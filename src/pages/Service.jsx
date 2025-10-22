import React from "react";
import HeroSection from "../components-2/Hero/Hero";
import servicePageData from "../data/servicesData";
import Private from "../components-2/PrivateEvent/Private";

import ProcessSection from "../components-2/Process/Process";
import EventsSection from "../components-2/Event/MainEvent";
import FAQAccordion from "../components-2/FAQ/FAQ";
import { useParams } from "react-router-dom";
import formatToHyphenated from "../utils/nameFormat";
import NotFound from "../components-2/NotFound/NotFound";
import ServicesHeader from "../components-2/Service/ServicesHeader";
import FlipCard from "../components-2/Service2/Service2";
import FlipCardHeader from "../components-2/Service/FlipCardHeader";

const Service = () => {
  const params = useParams();
  const data = servicePageData.find(
    (p) => formatToHyphenated(p.title) === params.serviceName
  );
  if (!data)
    return (
      <div>
        <NotFound />
      </div>
    );

  return (
    <div id="top">
      <HeroSection
        title={data.title}
        image={data.image}
        section={data.HeroData}
      />
      <Private data={data.aboutContent} />

      <section className="events-page">
        <FlipCardHeader
          preTitle={data.EventSection.tagline}
          title={data.EventSection.title}
          subtitle={data.EventSection.description}
        />

        {data.EventSection.section.map((event, idx) => (
          <FlipCard
            key={idx}
            title={event.title}
            image={event.image}
            flipData={event.flipData}
          />
        ))}
      </section>

      <ProcessSection />
      <EventsSection />
      <FAQAccordion faqs={data.faq} />
    </div>
  );
};

export default Service;
