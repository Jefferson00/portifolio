import styles from '../styles/components/About.module.css'

export function About(){

    return(
        <div className={`${styles.aboutContainer} ${styles.gridTemplateArea}`} id="about">
            <div className={styles.titleContainer}>
                <p>SOBRE MIM</p>
            </div>
            <div className={styles.imageContainer}>
                <img src="https://avatars.githubusercontent.com/u/12739211?v=4" alt="perfil"/>
            </div>
            <div className={styles.textContainer}>
                <p>
                 Oi, meu nome é Jefferson. Sou uma pessoa de mente inquieta e criativa.
                 Busco estar sempre atualizado e em constante aprendizado. 
                </p>
                 <p>Sou desenvolvedor
                 FullStack em inicio de carreira, em busca de novos desafios e oportunidades.
                </p>
                <br />
                <p>
                    Sou formado em Análise e Desenvolvimento de Sistemas pelo Instituto de Educação Superior de Brasília (IESB), 2018.
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