import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfoContainer}>
      <p className={styles.contactText}>
        Reach out to us at{" "}
        <a href="mailto:khushi.utoo@gmail.com" className={styles.emailLink}>
          khushi.utoo@gmail.com
        </a>
      </p>
      <p className={styles.copyrightText}>
        © 2023 Relume. All rights reserved.
      </p>
    </div>
  );
};

export default ContactInfo;
