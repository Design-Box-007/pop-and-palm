"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Left: Logo */}
        <div className={styles.logo}>Pop & Palm</div>

        {/* Center: Links (desktop only) */}
        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>About</a>
          <a href="#" className={styles.navLink}>Services</a>
          <a href="#" className={styles.navLink}>Contact</a>
        </div>

        {/* Right: Get in Touch (desktop only) */}
        <button className={styles.contactButton}>Get in Touch</button>

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
        <div
          className={styles.backdrop}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.showMenu : ""}`}>
        <a href="#" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</a>
        <a href="#" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About</a>
        <a href="#" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Services</a>
        <a href="#" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Contact</a>
        <button className={styles.mobileButton} onClick={() => setIsOpen(false)}>
          Get in Touch
        </button>
      </div>
    </nav>
  );
}
