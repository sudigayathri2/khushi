
import React from "react";
import styles from "./WinNothingToLose.module.css";

function WinNothingToLose() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <section className={styles.textColumn}>
          <div className={styles.textContent}>
            <h2 className={styles.subheading}>You know,</h2>
            <h3 className={styles.subHeading}>Everything to 
            <div className={styles.highlightedText}>Win,</div>
            nothing to lose.</h3>
            <p className={styles.description}>
              Imagine stepping out for a walk and being rewarded for every step
              you take. It's that simple and rewarding. No risks, just pure
              benefits as you move. Embrace the journey and let every step bring
              you closer to amazing rewards. Walk, earn, and enjoy the endless
              possibilities.
            </p>
          </div>
        </section>
        <aside className={styles.imageColumn}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f353590ba167de24149ba2f435befd45f63b2501895265f7ba90bc5fcbecaa4f?placeholderIfAbsent=true&apiKey=4576d070cbc54e1fbd10ba2c7863c4ea"
            className={styles.image}
            alt="Illustration representing the concept of winning with every step"
          />
        </aside>
      </div>
    </main>
  );
}

export default WinNothingToLose;
