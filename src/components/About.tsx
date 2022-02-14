import styles from '../styles/components/About.module.css'
import { Tooltip } from './Tooltip'

export function About() {
    const tooltipContent = () => (
        <div className={styles.tooltip}>
            <div>
                <img src="/icons/advanced.svg" alt="Avançado" />
                <p>Avançado</p>
            </div>
            <div>
                <img src="/icons/intermediary.svg" alt="Intermediário" />
                <p>Intermediário</p>
            </div>
            <div>
                <img src="/icons/basic.svg" alt="Básico" />
                <p>Básico</p>
            </div>
        </div>
    )

    return (
        <div className={`${styles.aboutContainer} ${styles.gridTemplateArea}`} id="about">
            <div className={styles.titleContainer}>
                <p>SOBRE MIM</p>
            </div>
            <div className={styles.imageContainer}>
                <img src="https://avatars.githubusercontent.com/u/12739211?v=4" alt="perfil" />
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
                <Tooltip content={tooltipContent}>
                    <p className={styles.shine}>SKILLS</p>
                </Tooltip>
                <div className={styles.iconsContainer}>
                    <div className={`${styles.skill} ${styles.skillIntermediary}`}>
                        <span className={styles.iconReact} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillIntermediary}`}>
                        <span className={styles.iconReactNative} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillIntermediary}`}>
                        <span className={styles.iconNode} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillIntermediary}`}>
                        <span className={styles.iconJavascript} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillIntermediary}`}>
                        <span className={styles.iconTypescript} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillIntermediary}`}>
                        <span className={styles.iconNext} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillIntermediary}`}>
                        <span className={styles.iconSqlite} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillIntermediary}`}>
                        <span className={styles.iconPostgres} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillIntermediary}`}>
                        <span className={styles.iconMySql} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillAdvanced}`}>
                        <span className={styles.iconHtml} />
                    </div>
                    <div className={`${styles.skill} ${styles.skillAdvanced}`}>
                        <span className={styles.iconCss} />
                    </div>
                </div>
            </div>
        </div>
    )
}