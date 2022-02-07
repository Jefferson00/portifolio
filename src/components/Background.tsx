import { useContext, useEffect, useRef, useState } from 'react';
import { ProjectsContext } from '../contexts/ProjectsContext';
import styles from '../styles/components/Background.module.css'


export function Background(){
  const repeat = 10;
  const backgroundRef = useRef<HTMLDivElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);
  const { positionY, positionX } = useContext(ProjectsContext);

  //const [positionX, setPositionX] = useState<number>();
  //const [positionY, setPositionY] = useState<number>();
  let timeout

  /*useEffect(() => {
    hiddenRef.current.addEventListener('mousemove', (event) => {
      if(timeout) clearTimeout(timeout);
      setPositionX(event.clientX + 751)
      setPositionY(event.clientY + 379)
      console.log(event.clientX)
      console.log(event.clientY)
      //backgroundRef.current.style.left = `${event.clientX}px`
      //console.log(event.clientX)
      timeout = setTimeout(() =>{
       // backgroundRef.current.classList.add(styles.close)
       // backgroundRef.current.classList.remove(styles.open)
      }, 1000);
      //backgroundRef.current.classList.remove(styles.close)
     // backgroundRef.current.classList.add(styles.open)
    })
  },[])*/

  return(
      <>
      <div className={styles.hiddenContainer} ref={hiddenRef} />
      <div 
        className={styles.backgroundContainer} 
        style={{
          WebkitMaskPositionX: `${positionX}px`,
          WebkitMaskPositionY: `${positionY}px`,
        }}  
        ref={backgroundRef}
      >
      {[...Array(repeat)].map((e, i) => (
        <>
          <div>
            <span className={`${styles.iconReact} ${styles.movingReact}`} />
          </div>
          <div className={styles.splitUpNode}>
            <span className={`${styles.iconNode} ${styles.movingNode}`} />
          </div>
          <div className={styles.splitUpJavascript}>
            <span className={`${styles.iconJavascript} ${styles.movingJavascript}`} />
          </div>
          <div className={styles.splitUpTypescript}>
            <span className={`${styles.iconTypescript} ${styles.movingTypescript}`} />
          </div>
          <div className={styles.splitUpCss}>
            <span className={`${styles.iconCss} ${styles.movingCss}`} />
          </div>
          <div className={styles.splitUpHtml}>
            <span className={`${styles.iconHtml} ${styles.movingHtml}`} />
          </div>
          <div className={styles.splitUpNext}>
            <span className={`${styles.iconNext} ${styles.movingNext}`} />
          </div>
          <div className={styles.splitUpSql}>
            <span className={`${styles.iconSql} ${styles.movingSql}`} />
          </div>
          <div className={styles.splitUpNest}>
            <span className={`${styles.iconNest} ${styles.movingNest}`} />
          </div>
        </>
      ))}
    </div></>
  )
}