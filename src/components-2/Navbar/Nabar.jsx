"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import icons from "../../Icon/Icon";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ✅ Get current path

  // Helper function to check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Left: Logo */}
        <div className={styles.logo}>Pop & Palm</div>

        {/* Center: Links (desktop only) */}
        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              isActive("/") ? styles.active : ""
            }`}
          >
            Home
          </Link>
          <a
            href="/#/#about"
            className={`${styles.navLink} ${
              isActive("#about") ? styles.active : ""
            }`}
          >
            About Us
          </a>
          <Link
            to="/services"
            className={`${styles.navLink} ${
              isActive("/services") ? styles.serivce : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className={`${styles.navLink} ${
              isActive("/gallery") ? styles.active : ""
            }`}
          >
            Highlights
          </Link>
          <Link
            to="/blog"
            className={`${styles.navLink} ${
              isActive("/blog") ? styles.active : ""
            }`}
          >
            Blog
          </Link>
        </div>

        {/* Right: Get in Touch (desktop only) */}
        <button className={styles.contactButton}>
          <Nav.Link
            href="https://us.bigin.online/org868107012/forms/enquiry-form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact{" "}
            <span>
              <img src={icons.icon1} alt="contact" />
            </span>
          </Nav.Link>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay backdrop (click to close) */}
      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.showMenu : ""}`}>
        <Link
          to="/"
          className={`${styles.mobileLink} ${
            isActive("/") ? styles.active : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${styles.mobileLink} ${
            isActive("/about") ? styles.active : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`${styles.mobileLink} ${
            isActive("/services") ? styles.active : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={`${styles.mobileLink} ${
            isActive("/contact") ? styles.active : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>

        <button
          className={styles.mobileButton}
          onClick={() => setIsOpen(false)}
        >
          Contact{" "}
          <span>
            <img src={icons.icon1} alt="contact" />
          </span>
        </button>
      </div>
    </nav>
  );
}
