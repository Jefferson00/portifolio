import styles from '../styles/components/Header.module.css'

export function Header(){

    return(
        <div className={styles.headerContainer}>
            <img src="logo.svg" alt="logo"/>
            <div>
                <p>Meu nome é Jefferson,</p>
                <p>sou {" "}
                    <strong>Desenvolvedor Full-Stack.</strong>
                </p>
            </div>
        </div>
    )
}