import { useEffect } from 'react';
import styles from '../styles/components/Socials.module.css'
import Link from 'next/link';

import { motion } from 'framer-motion';
import { easing } from '../styles/animations';

export function Socials() {
    useEffect(() => {
        const githubImg = new Image();
        githubImg.src = "/icons/github_orange.svg";
        const gmailImg = new Image();
        gmailImg.src = "/icons/gmail_orange.svg";
        const instagramImg = new Image();
        instagramImg.src = "/icons/instagram_orange.svg";
        const whatsappImg = new Image();
        whatsappImg.src = "/icons/whatsapp_orange.svg";
        const linkedinImg = new Image();
        linkedinImg.src = "/icons/linkedin_orange.svg";
    }, [])

    return (
        <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 1.4,
                duration: 0.6,
                ease: easing,
            }}
            className={styles.socialsContainer}
        >
            <p>Entre em contato</p>
            <div className={styles.icons}>
                <motion.a
                    href="https://github.com/Jefferson00"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        y: -5,
                    }}
                >
                    <span className={styles.iconGithub} />
                </motion.a>
                <motion.a
                    href="mailto:jeffersonts00@gmail.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        y: -5,
                    }}
                >
                    <span className={styles.iconGmail} />
                </motion.a>
                <motion.a
                    href="https://www.instagram.com/jeffreyy_30/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        y: -5,
                    }}
                >
                    <span className={styles.iconInstagram} />
                </motion.a>
                <motion.a
                    href="https://api.whatsapp.com/send?phone=5561982242660"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        y: -5,
                    }}
                >
                    <span className={styles.iconWhatsapp} />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/jefferson-c-silva-aa1b7b1a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                        y: -5,
                    }}
                >
                    <span className={styles.iconLinkedin} />
                </motion.a>
            </div>
            <div className={styles.resumeContainer}>
                <motion.a
                    href="/curriculo-jefferson-c-silva.pdf"
                    target="_blank"
                    whileHover={{
                        x: -5,
                        scale: 1.03,
                    }}
                >
                    <p>Currículo</p>
                </motion.a>
                <Link href="/#projects">
                    <motion.a
                        whileHover={{
                            x: 5,
                            scale: 1.03,
                        }}
                    >
                        <p>Projetos</p>
                    </motion.a>
                </Link>
            </div>
        </motion.div>
    )
}