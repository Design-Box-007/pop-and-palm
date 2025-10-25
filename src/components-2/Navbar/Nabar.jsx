import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";
import icons from "../../Icon/Icon";
import logo from "../../assets/new-logo-2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { pathname, hash } = location;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Navbar color logic
  const isWhiteNavbar = pathname.startsWith("/services/"); // White links only for /services/...
  const isBlackNavbar =
    ["/", "/about", "/blog", "/gallery", "/services"].includes(pathname) ||
    pathname.startsWith("/blog/") ||
    pathname.startsWith("/gallery");

  // Reusable link list
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us", isHash: true },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${isBlackNavbar ? styles.blackNavbar : ""}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div
          className={`${styles.logoDiv} ${
            isWhiteNavbar
              ? styles.whiteLogo
              : isBlackNavbar
              ? styles.blackLogo
              : ""
          }`}
        >
          <img
            src={logo}
            alt="Logo"
            className={`${styles.imglogo} ${
              isWhiteNavbar ? styles.imgwhite : ""
            }`}
          />
        </div>

        {/* Desktop Nav Links */}
        <div className={styles.navLinks}>
          {links.map(({ to, label, isHash }) =>
            isHash ? (
              <HashLink
                key={to}
                smooth
                to={to}
                onClick={closeMenu}
                className={`${styles.navLink} ${
                  isWhiteNavbar
                    ? styles.whiteLink
                    : isBlackNavbar
                    ? styles.blackLink
                    : ""
                } ${hash === "#about" && to === "/about" ? styles.active : ""}`}
              >
                {label}
              </HashLink>
            ) : (
              <Link
                key={to}
                to={to}
                onClick={closeMenu}
                className={`${styles.navLink} ${
                  isWhiteNavbar
                    ? styles.whiteLink
                    : isBlackNavbar
                    ? styles.blackLink
                    : ""
                } ${
                  pathname === to || pathname.startsWith(`${to}/`)
                    ? styles.active
                    : ""
                }`}
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* Contact Button */}
        <Nav.Link
          href="https://us.bigin.online/org868107012/forms/enquiry-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.contactButton}>
            Contact{" "}
            <span>
              <img src={icons.icon1} alt="contact" />
            </span>
          </button>
        </Nav.Link>

        {/* Mobile Toggle */}
        <button
          className={`${styles.menuButton} ${
            isWhiteNavbar
              ? styles.whiteMenuButton
              : isBlackNavbar
              ? styles.blackMenuButton
              : ""
          }`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && <div className={styles.backdrop} onClick={closeMenu} />}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.showMenu : ""}`}>
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={closeMenu}
            className={`${styles.mobileLink} ${
              pathname === to || pathname.startsWith(`${to}/`)
                ? styles.active
                : ""
            }`}
          >
            {label}
          </Link>
        ))}

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
