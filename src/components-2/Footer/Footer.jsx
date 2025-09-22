import React from "react";
import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <h2 className={styles.logo}>Pop & Palm</h2>
          <p className={styles.description}>
            Curating meaningful moments for brands, families, and communities
            across the UAE.
          </p>
          <div className={styles.socials}>
            <a href="#">
              <FaInstagram color="white" size={25}/>
            </a>
            <a href="#">
              <FaLinkedinIn color="white" size={25}/>
            </a>
            <a href="#">
              <FaFacebookF color="white" size={25}/>
            </a>
            <a href="#">
              <FaXTwitter color="white" size={25}/>
            </a>
          </div>
        </div>

        {/* Company */}
        <div className={styles.right}>
          <div>
            <h3 className={styles.heading}>Company</h3>
            <ul className={styles.links}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Highlights</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className={styles.heading}>Events We Curate</h3>
            <ul className={styles.links}>
              <li>
                <a href="#">Weddings</a>
              </li>
              <li>
                <a href="#">Corporate Events</a>
              </li>
              <li>
                <a href="#">Launches & Activations</a>
              </li>
              <li>
                <a href="#">Cultural Events</a>
              </li>
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

        {/* Bottom Section */}
      
      </div>
        <div className={styles.bottom}>
          <p>© 2025 Erwa. All rights reserved.</p>
          <div className={styles.contact}>
            <span>
              <FaMapMarkerAlt /> Based in Dubai, UAE
            </span>
            <span>
              <FaPhoneAlt /> +971 50 123 4567
            </span>
            <span>
              <MdEmail /> info@erwa.com
            </span>
          </div>
        </div>
    </footer>
  );
}
