import { GetStaticPaths, GetStaticProps } from "next"
import { useContext, useEffect, useRef, useState } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import styles from '../../styles/project.module.css'
import { connectToDatabase } from "../../utils/mongodb";


interface TechnologiesData {
    title: string,
    class: string
}

interface GalleryData {
    image: string;
}

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: TechnologiesData[];
    repository: string;
    link: string;
    thumbnail: string;
    gallery: GalleryData[];
    useCase: string;
    resume: string;
}

interface ProjectProps {
    project: Project,
}


export default function Project({ project }: ProjectProps) {
    const { updateButtonClicked, loadedProject } = useContext(ProjectsContext)
    const fullscreenContainerRef = useRef<HTMLDivElement>(null)
    const [selectedImage, setSelectedImage] = useState('/projects/lovepets/mobile/preview-1.jpg')
    const [fullScreenVisible, setFullScreenVisible] = useState(false)

    function setIconClass(techClass: string) {
        switch (techClass) {
            case "iconReact":
                return styles.iconReact
            case "iconNode":
                return styles.iconNode
            case "iconJavascript":
                return styles.iconJavascript
            case "iconTypescript":
                return styles.iconTypescript
            case "iconCss":
                return styles.iconCss
            case "iconHtml":
                return styles.iconHtml
            case "iconNext":
                return styles.iconNext
            case "iconSql":
                return styles.iconSql
            case "iconPostgres":
                return styles.iconPostgres
            case "iconSqlite":
                return styles.iconSqlite
            default:
                break;
        }
    }

    const handleWheel = (event) => {
        if (event.deltaY > 0) {
            event.target.scrollBy(300, 0)
        } else {
            event.target.scrollBy(-300, 0)
        }

    }

    const showFullscrenImage = (image: string) => {
        setSelectedImage(image)

        fullscreenContainerRef.current.style.visibility = 'visible'
        fullscreenContainerRef.current.style.opacity = '1'
    }

    const hideFullscrenImage = () => {
        setSelectedImage('')

        fullscreenContainerRef.current.style.opacity = '0'
        fullscreenContainerRef.current.style.visibility = 'hidden'
    }

    useEffect(() => {
        updateButtonClicked()
        loadedProject()
    }, [])

    return (
        <>
            <div className={styles.projectContainer} id="project">
                <div className={styles.detailsContainer}>
                    <div className={styles.descriptionContainer}>
                        <p>{project.title}</p>
                        <div className={styles.descriptionBox} dangerouslySetInnerHTML={{ __html: project.description }}>
                        </div>
                    </div>

                    <div className={styles.linksContainer}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <span className={styles.iconExternal} />
                            <p>Preview/Demo</p>
                        </a>
                        <a href={project.repository} target="_blank" rel="noopener noreferrer">
                            <span className={styles.iconGithub} />
                            <p>Repositório</p>
                        </a>
                    </div>

                </div>

                <div className={styles.thumbContainer}>
                    <img src={project.thumbnail} alt="thumbnail" />
                </div>

                <div className={styles.iconsContainer}>
                    {project.technologies.map((tech: TechnologiesData, index: number) => {
                        return (
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

                <div className={styles.galleryContainer} onWheel={e => handleWheel(e)}>
                    {project.gallery.map((image, index) => {
                        return (
                            <div className={styles.galleryItem} key={index}>
                                <img src={image.image} alt={`preview - ${index}`}
                                    onClick={() => showFullscrenImage(image.image)} />
                            </div>
                        )
                    })}
                </div>


                <div className={styles.descriptionContainer} id="funcionalidades">
                    <p>Funcionalidades</p>
                    <div className={styles.descriptionBox} dangerouslySetInnerHTML={{ __html: project.useCase }}>
                    </div>
                    <div className={styles.linksContainer} style={{ flexDirection: 'row' }}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ marginRight: 16 }}>
                            <span className={styles.iconExternal} />
                            <p>Preview/Demo</p>
                        </a>
                        <a href={project.repository} target="_blank" rel="noopener noreferrer">
                            <span className={styles.iconGithub} />
                            <p>Repositório</p>
                        </a>
                    </div>
                </div>
            </div>

            <div
                ref={fullscreenContainerRef}
                className={styles.fullScreenImage}
                onClick={hideFullscrenImage}
            >
                <img src={selectedImage} alt='' />
            </div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const db = await connectToDatabase(process.env.MONGODB_URI);

    const projects = await db
        .collection('projects')
        .find({})
        .limit(2)
        .toArray();

    const paths = projects.map(project => {
        return {
            params: {
                slug: project.id
            }
        }
    })

    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const db = await connectToDatabase(process.env.MONGODB_URI);
    const { slug } = ctx.params;


    const projects = await db
        .collection('projects')
        .findOne({ id: slug });


    return {
        props: {
            project: JSON.parse(JSON.stringify(projects))
        },
        revalidate: 60 * 60 * 8,
    }
}