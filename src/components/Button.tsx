import { useContext, useState } from 'react'
import { ProjectsContext } from '../contexts/ProjectsContext'
import styles from '../styles/components/Button.module.css'

export function Button(){
    const {isButtonClicked, updateButtonClicked} = useContext(ProjectsContext)

    function clickButton(){
       updateButtonClicked()
       let button =  document.getElementById("btn")
       button.classList.add(styles.openButtonAnimation)
       setTimeout(()=>{
           const res = document.querySelector('#divButton')
           res.scrollIntoView({ block: "start", behavior: 'smooth' })
           // window.scrollTo({top:1000, behavior:"smooth"})
       },100)
    }

    return(
        <div className={styles.buttonContainer}  id="divButton">
            <button onClick={()=>clickButton()} id="btn" disabled={isButtonClicked}>
                <strong>PROJETOS</strong>
            </button>
        </div>
    )
}