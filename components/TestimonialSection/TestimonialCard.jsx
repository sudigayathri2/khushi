
import React from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ imageSrc, content, avatarSrc, name }) => {
  return (
    <article className={styles.testimonialCard}>
      
      <p className={styles.testimonialContent}>{content}</p>
      <footer className={styles.testimonialFooter}>
        <img
          src={avatarSrc}
          alt={`${name}'s avatar`}
          className={styles.avatarImage}
        />
        <span className={styles.authorName}>{name}</span>
      </footer>
    </article>
  );
};

export default TestimonialCard;
