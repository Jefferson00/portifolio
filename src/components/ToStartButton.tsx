import styles from '../styles/components/ToStartButton.module.css';

import { motion } from 'framer-motion';
import { easing } from '../styles/animations';
import { useEffect, useRef, useState } from 'react';

export function ToStartButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentScrollPos, setCurrentScrollPos] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {

      window.addEventListener('scroll', () => {
        setCurrentScrollPos(window.pageYOffset);

        if (currentScrollPos > (window.innerHeight / 2)) {
          containerRef.current.style.opacity = '1'

        } else {

          containerRef.current.style.opacity = '0'
        }

      });
    }
  }, [currentScrollPos]);

  function handleToTop() {
    if (typeof window !== undefined) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.container} ref={containerRef}>
      <button type="button" onClick={handleToTop}>
        <img src="/icons/up.svg" alt="ir para o topo" />
      </button>
    </div>
  )
}