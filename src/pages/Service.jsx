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
import MainService2 from "../components-2/Service2/Service2Main";

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

      <MainService2
        tagline={data.EventSection.tagline}
        title={data.EventSection.title}
        description={data.EventSection.description}
        section={data.EventSection.section} // Passing the array of data here
      />
      <ProcessSection />
      <EventsSection />
      <FAQAccordion faqs={data.faq} />
    </div>
  );
};

export default Service;
