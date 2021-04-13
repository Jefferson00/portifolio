import styles from '../styles/components/About.module.css'

export function About(){

    return(
        <div className={`${styles.aboutContainer} ${styles.gridTemplateArea}`}>
            <div className={styles.titleContainer}>
                <p>SOBRE MIM</p>
            </div>
            <div className={styles.imageContainer}>
                <img src="https://avatars.githubusercontent.com/u/12739211?v=4" alt="perfil"/>
            </div>
            <div className={styles.textContainer}>
                <p>
                 Oi, me chamo Jefferson Clemente. Sou
                 desenvolvedor full-stack, em busca de novas oportunidades e desafios. 
                 Em constante aprendizado, sempre evoluindo...
                </p>
            </div>
            <div className={styles.skillsContainer}>
                <p>SKILLS</p>
                <div className={styles.iconsContainer}>
                    <span className={styles.iconReact}/>
                    <span className={styles.iconNode}/>
                    <span className={styles.iconJavascript}/>
                    <span className={styles.iconTypescript}/>
                    <span className={styles.iconCss}/>
                    <span className={styles.iconHtml}/>
                    <span className={styles.iconNext}/>
                    <span className={styles.iconSql}/>
                </div>
            </div>
        </div>
    )
}