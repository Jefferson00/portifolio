import styles from '../styles/components/Socials.module.css'
import Link from 'next/link';

export function Socials(){

    return(
        <div className={styles.socialsContainer}>
            <p>Entre em contato</p>
            <div className={styles.icons}>
                <a href="https://github.com/Jefferson00"  target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconGithub}></span>
                    <span className={styles.iconGithubHidden}></span>
                </a>
                <a href="mailto:jeffersonts00@gmail.com.br"  target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconGmail}></span>
                    <span className={styles.iconGmailHidden}></span>
                </a>
                <a href="https://www.instagram.com/jeffreyy_30/"  target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconInstagram}></span>
                    <span className={styles.iconInstagramHidden}></span>
                </a>
                <a href="https://api.whatsapp.com/send?phone=5561982242660"  target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconWhatsapp}></span>
                    <span className={styles.iconWhatsappHidden}></span>
                </a>
                <a href="https://www.linkedin.com/in/jefferson-c-silva-aa1b7b1a9/"  target="_blank" rel="noopener noreferrer">
                    <span className={styles.iconLinkedin}></span>
                    <span className={styles.iconLinkedinHidden}></span>
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