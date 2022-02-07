import styles from '../styles/components/Technologies.module.css'

export function Technologies(){

    return(
        <div className={`${styles.techContainer} ${styles.showUpAnimation}`}>
             <div className={styles.splitUpReact}>
                <span className={`${styles.iconReact} ${styles.movingReact}`}/> 
             </div>
             <div className={styles.splitUpNode}>
                <span className={`${styles.iconNode} ${styles.movingNode}`}/>
             </div>
             <div className={styles.splitUpJavascript}>
                <span className={`${styles.iconJavascript} ${styles.movingJavascript}`}/>
             </div>
             <div className={styles.splitUpTypescript}>
                 <span className={`${styles.iconTypescript} ${styles.movingTypescript}`}/>
             </div>
             <div className={styles.splitUpCss}>
                <span className={`${styles.iconCss} ${styles.movingCss}`}/>
             </div>
             <div className={styles.splitUpHtml}>
                <span className={`${styles.iconHtml} ${styles.movingHtml}`}/>
             </div>
             <div className={styles.splitUpNext}>
                <span className={`${styles.iconNext} ${styles.movingNext}`}/>
             </div>
            <div className={styles.splitUpSql}>
                <span className={`${styles.iconSql} ${styles.movingSql}`}/>
            </div>
            <div className={styles.splitUpNest}>
                <span className={`${styles.iconNest} ${styles.movingNest}`}/>
            </div>
        </div>
    )
}