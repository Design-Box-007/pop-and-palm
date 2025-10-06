import React from "react";
import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTiktok,
  FaYoutube,
  FaMediumM,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import servicePageData from "../../data/servicesData";
import formatToHyphenated from "../../utils/nameFormat";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <h2 className={styles.logo}>Pop & Palm Events</h2>
          {/* <p className={styles.description}>
            Curating meaningful moments for brands, families, and communities
            across the UAE.
          </p> */}
        </div>

        {/* Company */}
        <div className={styles.right}>
          <div className={styles.socials}>
            <a href="#">
              <FaInstagram color="white" size={25} />
            </a>
            <a href="#">
              <FaLinkedinIn color="white" size={25} />
            </a>
            <a href="#">
              <FaFacebookF color="white" size={25} />
            </a>
            <a href="#">
              <FaXTwitter color="white" size={25} />
            </a>
            <a href="#">
              <FaTiktok color="white" size={25} />
            </a>
            <a href="#">
              <FaYoutube color="white" size={25} />
            </a>
            <a href="#">
              <FaMediumM color="white" size={25} />
            </a>
          </div>

          <div className={styles.threeSection}>
            {/* company */}
            <div>
              <h3 className={styles.heading}>Company</h3>
              <ul className={styles.links}>
                <li>
                  <HashLink smooth to="/#about">
                    About Us
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/gallery#top">
                    Gallery
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/services#top">
                    Services
                  </HashLink>
                </li>
                <li>
                  <Link
                    to="https://us.bigin.online/org868107012/forms/enquiry-form"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Events */}
            <div>
              <h3 className={styles.heading}>Events We Curate</h3>
              <ul className={styles.links}>
                {servicePageData.map((data, index) => (
                  <li key={index}>
                    <HashLink
                      smooth
                      to={`services/${formatToHyphenated(data.title)}#top`}
                    >
                      {data.title}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className={styles.heading}>Information</h3>
              <ul className={styles.links}>
                <li>
                  <a href="#">Client Stories</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
      <div className={styles.bottom}>
        <p>© 2024 All rights reserved.</p>
        <div className={styles.contact}>
          <span>
            <FaMapMarkerAlt /> Based in Dubai, UAE
          </span>
          <span>
            <FaPhoneAlt /> +971543278769
          </span>
          <span>
            <MdEmail /> hello@popandpalmevents.com
          </span>
        </div>
      </div>
    </footer>
  );
}
