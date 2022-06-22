import styles from "../styles/components/Header.module.css";
import Link from "next/link";

import { motion } from "framer-motion";
import { easing } from "../styles/animations";
import { useEffect, useRef } from "react";

export function Header() {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setTimeout(() => {
      pRef.current.className = styles.first;
    }, 4500);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <Link href={"/#projects"}>
        <motion.img
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
            ease: easing,
          }}
          src="/logo.svg"
          alt="Jefferson Dev"
        />
      </Link>
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 0.6,
          ease: easing,
        }}
      >
        <p ref={pRef}>
          Meu nome é <a href="#about">Jefferson</a>,
        </p>
        <p>
          sou <strong>Desenvolvedor Javascript Full-Stack.</strong>
        </p>
      </motion.div>
    </div>
  );
}
