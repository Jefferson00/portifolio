import styles from '../styles/components/Header.module.css';
import Link from 'next/link';

export function Header(){

    return(
        <div className={styles.headerContainer}>
            <Link href={'/#projects'}>
                <img src="/logo.svg" alt="logo"/>
            </Link>
            <div>
                <p>Meu nome é <a href="#about">Jefferson</a>,</p>
                <p>sou {" "}
                    <strong>Desenvolvedor Full-Stack.</strong>
                </p>
            </div>
        </div>
    )
}