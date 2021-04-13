import { useContext, useEffect, useState } from 'react'
import { ProjectsContext } from '../contexts/ProjectsContext'
import styles from '../styles/components/Projects.module.css'
import projects from '../../projects.json'

interface TechnologiesData{
    title:string,
    class:string
}

export function Projects(){
    const {isButtonClicked, openModal} = useContext(ProjectsContext)
    const [allProjects, setAllProjects] = useState([])

    function setIconClass(techClass:string){
        switch (techClass) {
            case "iconReact":
                return styles.iconReact
                break;
            case "iconNode":
                return styles.iconNode
                break;
            case "iconJavascript":
                return styles.iconJavascript
                break;
            case "iconTypescript":
                return styles.iconTypescript
                break;
            case "iconCss":
                return styles.iconCss
                break;
            case "iconHtml":
                return styles.iconHtml
                break;
            case "iconNext":
                return styles.iconNext
                break;
            case "iconSql":
                return styles.iconSql
                break;
            default:
                break;
        }
    }

    useEffect(()=>{
        setAllProjects(projects)
    },[])

    console.log(projects)
    return(
        <>
        <div id="projects">
        {isButtonClicked &&
            <div className={styles.projectsContainer}>
                <div className={styles.projectsList}>
                    {allProjects.map((project, index)=>{
                       return(
                        <div className={styles.projectItem} key={index}>
                            <div className={styles.imageContainer} onClick={()=> openModal(project)}>
                                <span>
                                    <img src="/icons/eye.svg" alt="ver"/>
                                </span>
                                <img src={project.thumbnail} alt="item"/>
                            </div>
                            <p>{project.title}</p>
                            <div className={styles.iconsContainer}>
                                {project.technologies.map((tech:TechnologiesData) =>{
                                    return(
                                        <span className={setIconClass(tech.class)}>
                                            <div className={styles.iconsLegend}>
                                                {tech.title}
                                            </div>
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                       )
                    })}
                </div>
            </div>
        }
        </div>
        </>
    )
}