"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styles from "./Navbar.module.css";
import icons from "../../Icon/Icon";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // This is the key change: check for paths where the navbar should be white.
  // It will be white on the homepage and on specific sub-pages.
  const isWhiteNavbar =
    isActive("/") ||
    location.pathname.startsWith("/services/") ||
    location.pathname.startsWith("/about");

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`${styles.navbar} ${!isWhiteNavbar ? styles.blackNavbar : ""}`}
    >
      <div className={styles.container}>
        {/* Left: Logo */}
        <div
          className={`${styles.logo} ${!isWhiteNavbar ? styles.blackLogo : ""}`}
        >
          Pop & Palm
        </div>

        {/* Center: Desktop Links */}
        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              !isWhiteNavbar ? styles.blackLink : ""
            } ${isActive("/") ? styles.active : ""}`}
          >
            Home
          </Link>
          <HashLink
            smooth
            to="/#about"
            className={`${styles.navLink} ${
              !isWhiteNavbar ? styles.blackLink : ""
            } ${location.hash === "#about" ? styles.active : ""}`}
          >
            About Us
          </HashLink>
          <Link
            to="/services"
            className={`${styles.navLink} ${
              !isWhiteNavbar ? styles.blackLink : ""
            } ${
              location.pathname.startsWith("/services") ? styles.active : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className={`${styles.navLink} ${
              !isWhiteNavbar ? styles.blackLink : ""
            } ${location.pathname.startsWith("/gallery") ? styles.active : ""}`}
          >
            Highlights
          </Link>
          <Link
            to="/blog"
            className={`${styles.navLink} ${
              !isWhiteNavbar ? styles.blackLink : ""
            } ${location.pathname.startsWith("/blog") ? styles.active : ""}`}
          >
            Blog
          </Link>
        </div>

        {/* Right: Contact Button (desktop only) */}
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
          className={`${styles.menuButton} ${
            !isWhiteNavbar ? styles.blackMenuButton : ""
          }`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay backdrop (click to close) */}
      {isOpen && <div className={styles.backdrop} onClick={closeMenu} />}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.showMenu : ""}`}>
        <Link
          to="/"
          className={`${styles.mobileLink} ${
            isActive("/") ? styles.active : ""
          }`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/#about"
          className={`${styles.mobileLink} ${
            location.hash === "#about" ? styles.active : ""
          }`}
          onClick={closeMenu}
        >
          About Us
        </Link>
        <Link
          to="/services"
          className={`${styles.mobileLink} ${
            location.pathname.startsWith("/services") ? styles.active : ""
          }`}
          onClick={closeMenu}
        >
          Services
        </Link>
        <Link
          to="/gallery"
          className={`${styles.mobileLink} ${
            location.pathname.startsWith("/gallery") ? styles.active : ""
          }`}
          onClick={closeMenu}
        >
          Highlights
        </Link>
        <Link
          to="/blog"
          className={`${styles.mobileLink} ${
            location.pathname.startsWith("/blog") ? styles.active : ""
          }`}
          onClick={closeMenu}
        >
          Blog
        </Link>

        <Nav.Link
          href="https://us.bigin.online/org868107012/forms/enquiry-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.mobileButton} onClick={closeMenu}>
            Contact{" "}
            <span>
              <img src={icons.icon1} alt="contact" />
            </span>
          </button>
        </Nav.Link>
      </div>
    </nav>
  );
}
