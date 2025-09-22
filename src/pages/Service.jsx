import React from "react";
import HeroSection from "../components-2/Hero/Hero";
import servicePageData from "../data/servicesData";
import Private from "../components-2/PrivateEvent/Private";
import MainService from "../components-2/Commen/Services";
import ProcessSection from "../components-2/Process/Process";
import EventsSection from "../components-2/Event/MainEvent";
import FAQAccordion from "../components-2/FAQ/FAQ";
import { useParams } from "react-router-dom";
import formatToHyphenated from "../utils/nameFormat";
import NotFound from "../components-2/NotFound/NotFound";

const Service = () => {
  const params = useParams();
  const data = servicePageData.find(
    (p) =>
      formatToHyphenated(p.title) === formatToHyphenated(params.serviceName)
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
      <MainService
        tagline={data.EventSection.tagline}
        title={data.EventSection.title}
        description={data.EventSection.description}
        section={data.EventSection.categories}
        showAsDescription={true}
      />
      <ProcessSection />
      <EventsSection />
      <FAQAccordion faqs={data.faq} />
    </div>
  );
};

export default Service;
