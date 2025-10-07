import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styles from "./Navbar.module.css";
import icons from "../../Icon/Icon";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/new-logo-2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // The navbar is white on the homepage, about pages, and blog sub-pages.
  const isWhiteNavbar =
    isActive("/") ||
    location.pathname.startsWith("/about") ||
    location.pathname.startsWith("/blog/"); // Checks specifically for blog sub-pages

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // The navbar is black on the blog, services, and gallery root pages.
  const isBlackNavbar =
    location.pathname === "/blog" || // Exact match for /blog
    location.pathname === "/services" || // Exact match for /services
    location.pathname.startsWith("/gallery"); // Keep "starts with" for gallery
  return (
    <nav
      className={`${styles.navbar} ${isBlackNavbar ? styles.blackNavbar : ""}`}
    >
      <div className={styles.container}>
        {/* Left: Logo */}
        <div
          className={`${styles.logoDiv} ${isBlackNavbar ? styles.blackLogo : ""}`}
        >
          <img src={logo} className={styles.imglogo} />
        </div>

        {/* Center: Desktop Links */}
        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              isBlackNavbar ? styles.blackLink : ""
            } ${isActive("/") ? styles.active : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <HashLink
            smooth
            to="/about"
            className={`${styles.navLink} ${
              isBlackNavbar ? styles.blackLink : ""
            } ${location.hash === "#about" ? styles.active : ""}`}
            onClick={closeMenu}
          >
            About Us
          </HashLink>
          <Link
            to="/services"
            className={`${styles.navLink} ${
              isBlackNavbar ? styles.blackLink : ""
            } ${
              location.pathname.startsWith("/services") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/gallery"
            className={`${styles.navLink} ${
              isBlackNavbar ? styles.blackLink : ""
            } ${location.pathname.startsWith("/gallery") ? styles.active : ""}`}
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            to="/blog"
            className={`${styles.navLink} ${
              isBlackNavbar ? styles.blackLink : ""
            } ${location.pathname.startsWith("/blog") ? styles.active : ""}`}
            onClick={closeMenu}
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
            isBlackNavbar ? styles.blackMenuButton : ""
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
          to="/about"
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
          Gallery
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
