import { GetStaticPaths, GetStaticProps } from "next"
import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import api from "../../services/api"
import styles from '../../styles/project.module.css'


interface TechnologiesData{
    title:string,
    class:string
}

interface GalleryData{
    image:string;
}

interface Project{
    id:string;
    title:string;
    description:string;
    technologies:TechnologiesData[];
    repository:string;
    link:string;
    thumbnail:string;
    gallery:GalleryData[];
    useCase:string;
}

interface ProjectProps{
    project: Project,
}


export default function Project({project}: ProjectProps){
    const {updateButtonClicked, loadedProject} = useContext(ProjectsContext)

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
        updateButtonClicked()
        loadedProject()
    },[])

    return(
        <div className={styles.projectContainer} id="project">
            <div className={styles.detailsContainer}>
                <div className={styles.descriptionContainer}>
                    <p>{project.title}</p>
                    <div className={styles.descriptionBox} dangerouslySetInnerHTML={{__html:project.description}}>
                    </div>
                </div>

                <div className={styles.linksContainer}>
                    <a href={project.link}  target="_blank" rel="noopener noreferrer">
                        <span className={styles.iconExternal}></span>
                    </a>
                    <a href={project.repository}  target="_blank" rel="noopener noreferrer">
                        <span className={styles.iconGithub}></span>
                    </a>
                </div>
                
            </div>

            <div className={styles.thumbContainer}>
                <img src={project.thumbnail} alt="thumbnail" />
            </div>

            <div className={styles.iconsContainer}>
                {project.technologies.map((tech:TechnologiesData, index:number) =>{
                    return(
                        <span className={setIconClass(tech.class)} key={index}>
                            <div className={styles.iconsLegend}>
                                {tech.title}
                            </div>
                            <div className={styles.iconsLegendMobile}>
                                <p>{tech.title}</p>
                            </div>
                        </span>
                    )
                })}
            </div>

            <div className={styles.galleryContainer}>
                {project.gallery.map((image, index) =>{
                    return(
                        <div className={styles.galleryItem} key={index}>
                            <img src={image.image} alt={`preview - ${index}`} />
                        </div>
                    )
                })} 
            </div>


            <div className={styles.descriptionContainer}>
                    <p>Caso de estudo</p>
                    <div className={styles.descriptionBox} dangerouslySetInnerHTML={{__html:project.useCase}}>
                    </div>
                <div className={styles.linksContainer} style={{flexDirection:'row'}}>
                        <a href={project.link}  target="_blank" rel="noopener noreferrer" style={{marginRight:16}}>
                            <span className={styles.iconExternal}></span>
                        </a>
                        <a href={project.repository}  target="_blank" rel="noopener noreferrer">
                            <span className={styles.iconGithub}></span>
                        </a>
                </div>
            </div>


        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () =>{
    const {data} = await api.get('projects', {
        params:{
            _limit:2
        }
    })

    const paths = data.map(project => {
        return{
            params:{
                slug:project.id
            }
        }
    })

    return{
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps : GetStaticProps = async (ctx) => {
    const {slug} = ctx.params;

    const {data} = await api.get(`projects/${slug}`)

    

    return{
        props:{
            project: data
        },
        revalidate: 60*60*8, 
    }
}