import { useContext } from 'react';
import { ProjectsContext } from '../contexts/ProjectsContext';
import styles from '../styles/components/Projects.module.css';
import Link from 'next/link';
import { setIconClass } from '../utils/setIconClass';


interface TechnologiesData {
    title: string,
    class: string
}

interface ProjectData {
    id: string;
    title: string;
    description: string;
    technologies: TechnologiesData[];
    repository: string;
    link: string;
    thumbnail: string;
    thumbnail_small: string;
    resume: string;
}

interface HomeProps {
    projects: ProjectData[];
}

export function Projects({ projects }: HomeProps) {
    const { clickedInProject } = useContext(ProjectsContext)

    return (
        <>
            <div id="projects">
                <div className={styles.sectionTitleContainer}>
                    <button disabled>
                        <strong>PROJETOS</strong>
                    </button>
                </div>
                <div className={styles.projectsContainer}>
                    <div className={styles.projectsList}>
                        {projects.map((project: ProjectData, index: number) => {
                            return (
                                <div className={styles.projectItem} key={index}>
                                    <div className={styles.imageContainer}>
                                        <Link href={`/projects/${project.id}#project`}>
                                            <a>
                                                <span onClick={clickedInProject}>
                                                    <img src="/icons/eye.svg" alt="ver" />
                                                </span>
                                            </a>
                                        </Link>
                                        {project.thumbnail_small ?
                                            <img src={project.thumbnail_small} alt={project.title} />
                                            :
                                            <img src={project.thumbnail} alt={project.title} />
                                        }
                                    </div>
                                    <div className={styles.titleContainer}>
                                        <p>{project.title}</p>
                                    </div>
                                    <div className={styles.descriptionContainer} dangerouslySetInnerHTML={{ __html: project.resume }}>
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
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

