import styles from '../styles/components/Socials.module.css'
import Link from 'next/link';
import { useEffect } from 'react';

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
        <div className={styles.socialsContainer}>
            <p>Entre em contato</p>
            <div className={styles.icons}>
                <a href="https://github.com/Jefferson00" target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconGithub} />
                </a>
                <a href="mailto:jeffersonts00@gmail.com.br" target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconGmail} />
                </a>
                <a href="https://www.instagram.com/jeffreyy_30/" target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconInstagram} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5561982242660" target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconWhatsapp} />
                </a>
                <a href="https://www.linkedin.com/in/jefferson-c-silva-aa1b7b1a9/" target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconLinkedin} />
                </a>
            </div>
            <div className={styles.resumeContainer}>
                <a href="/curriculo.pdf" target="_blank">
                    <p>Currículo</p>
                </a>
                <Link href="/#projects">
                    <a>
                        <p>Projetos</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}