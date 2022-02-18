import { useEffect, useRef } from "react";
import styles from "../styles/components/Technologies.module.css";

export function Technologies() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* useEffect(() => {
    const items = containerRef.current
      ?.childNodes as NodeListOf<HTMLDivElement>;

    setTimeout(() => {
      items?.forEach((item) => {
        item.classList.forEach((cls) => {
          if (cls.includes("light")) {
            console.log(Math.floor(Math.random() * 10));
            item.style.top = `${Math.floor(Math.random() * 100)}%`;
            item.style.animationDelay = `${Math.floor(Math.random() * 20)}s`;
            item.style.animationDirection = `${Math.floor(
              Math.random() * 10
            )}s`;
          }
        });
      });
    }, 1000);
  }); */

  return (
    <div className={styles.techContainer} ref={containerRef}>
      <div>
        <span className={`${styles.iconReact} ${styles.movingTypescript}`} />
      </div>
      <div>
        <span className={`${styles.iconNode} ${styles.movingTypescript}`} />
      </div>
      <div>
        <span
          className={`${styles.iconJavascript} ${styles.movingTypescript}`}
        />
      </div>
      <div>
        <span
          className={`${styles.iconTypescript} ${styles.movingTypescript}`}
        />
      </div>
      <div className={styles.splitUpCss}>
        <span className={`${styles.iconCss} ${styles.movingTypescript}`} />
      </div>
      <div className={styles.splitUpHtml}>
        <span className={`${styles.iconHtml} ${styles.movingTypescript}`} />
      </div>
      <div className={styles.splitUpNext}>
        <span className={`${styles.iconNext} ${styles.movingTypescript}`} />
      </div>
      <div className={styles.splitUpSql}>
        <span className={`${styles.iconSql} ${styles.movingTypescript}`} />
      </div>
      <div className={styles.splitUpNest}>
        <span className={`${styles.iconNest} ${styles.movingTypescript}`} />
      </div>
    </div>
  );
}
