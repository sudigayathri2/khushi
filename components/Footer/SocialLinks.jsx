
import React from "react";
import styles from "./SocialLinks.module.css";

const socialLinks = [
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "YouTube", url: "#" },
];

const SocialLinks = () => {
  return (
    <nav className={styles.socialLinksContainer}>
      <h2 className={styles.socialLinksTitle}>Follow us on</h2>
      <ul className={styles.socialLinksList}>
        {socialLinks.map((link, index) => (
          <li key={index} className={styles.socialLinkItem}>
            <a href={link.url} className={styles.socialLink}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;
