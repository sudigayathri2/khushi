import React, { useState } from "react";
import styles from "./TestimonialSection.module.css";
import TestimonialCard from "./TestimonialCard";
import testimonialData from "./testimonialData";

const TestimonialSection = () => {
  const [visibleCount, setVisibleCount] = useState(3); // initial number of testimonials to show

  const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 6, testimonialData.length)); // Show 6 more testimonials or all if fewer
  };

  return (
    <section className={styles.testimonialSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/17672ce8c5bf6c83b8210137b0c49a1cef32b5455544f86683791f064a92b09f?placeholderIfAbsent=true&apiKey=4576d070cbc54e1fbd10ba2c7863c4ea"
        alt=""
        className={styles.backgroundImage}
      />
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>What <span className="b">people</span> are saying</h2>
        <div className={styles.testimonialGrid}>
          {testimonialData.slice(0, visibleCount).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        {visibleCount < testimonialData.length && (
          <button className={styles.showMoreButton} onClick={handleShowMore}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
