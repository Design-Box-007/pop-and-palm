// components/ServicesHeader.js
import React from "react";
 import icons from "../../Icon/Icon";
import ServicesCrown from "../../assets/servicesCrown.png";
import LeftToRightReveal from "../../components/LeftToRightReveal";
import { HashLink } from "react-router-hash-link";

function ServicesHeader({ title, subtitle }) {
  return (
    // <header className={styles.header}>
    //  <h1 className={styles.title}>{title}</h1>
    //   <p className={"subtitle"}>{subtitle}</p>
    // </header>
    <div className="d-flex flex-column mt-5">
      <img
        src={ServicesCrown}
        className="services-crown"
        width="300px"
        alt="ServicesCrown"
      />
      <div className="service-header">
        <LeftToRightReveal>
          {" "}
          <div className="d-flex align-items-end">
            <h1 className="title">{title}</h1>
            &nbsp;&nbsp;
            <div className="subtitle mb-1">{subtitle}</div>
          </div>
        </LeftToRightReveal>
        <HashLink smooth to="/services#top">
          <button className="button-primary " style={{ width: "200px" }}>
            Learn more &rarr;
          </button>
        </HashLink>
      </div>
    </div>
  );
}

export default ServicesHeader;
