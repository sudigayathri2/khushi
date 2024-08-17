import React from "react";
import styles from "./Footer.module.css";
import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import logo from './logo.png'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.mainColumn}>
          <div className={styles.brandSection}>
            <div className={styles.logoWrapper}>
              <img
                loading="lazy"
                src={logo}
                alt="Khushi logo"
                className={logo}
              />
              <h1 className={styles.brandName}>Khushi</h1>
            </div>
            <div>
              <h1 className="c"><span className="b">Health & </span>
                <span className="a">Happiness</span>
              </h1>
            </div>
            <p className={styles.disclaimer}>
              Relume Ipsum is still in early Beta, so please keep in mind that
              there may be some imperfections as we continue to work on improving
              it.
            </p></div>

          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.legalLink}>
              Terms of Service
            </a>
          </div>
        </div>
        <div className={styles.sideColumn}>
          <SocialLinks />
          <ContactInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
