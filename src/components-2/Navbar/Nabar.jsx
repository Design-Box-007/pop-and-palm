import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>Pop & Palm</div>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>
            Home
          </a>
          <a href="#" className={styles.navLink}>
            About Us
          </a>
          <a href="#" className={styles.navLink}>
            Services
          </a>
          <a href="#" className={styles.navLink}>
            Highlights
          </a>
          <a href="#" className={styles.navLink}>
            Blog
          </a>
        </div>

        {/* Contact Button */}
        <button className={styles.contactButton}>Contact</button>
      </div>
    </nav>
  );
}
