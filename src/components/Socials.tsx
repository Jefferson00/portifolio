import styles from '../styles/components/Socials.module.css'

export function Socials(){

    return(
        <div className={styles.socialsContainer}>
            <p>Entre em contato</p>
            <div className={styles.icons}>
                <a href="#">
                    <span className={styles.iconGithub}></span>
                </a>
                <a href="#">
                    <span className={styles.iconGmail}></span>
                </a>
                <a href="#">
                    <span className={styles.iconInstagram}></span>
                </a>
                <a href="#">
                    <span className={styles.iconWhatsapp}></span>
                </a>
                <a href="#">
                    <span className={styles.iconLinkedin}></span>
                </a>
            </div>
        </div>
    )
}