import { useContext } from 'react';
import Link from 'next/link';

import { ProjectsContext } from '../contexts/ProjectsContext';
import { setIconClass } from '../utils/setIconClass';

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft } from '../styles/animations';

import styles from '../styles/components/Projects.module.css';

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
    const { clickedInProject } = useContext(ProjectsContext);

    return (
        <>
            <div id="projects">
                <div className={styles.sectionTitleContainer}>
                    <button disabled>
                        <strong>PROJETOS</strong>
                    </button>
                </div>
                <motion.div

                    className={styles.projectsContainer}
                >
                    <div className={styles.projectsList}>
                        {projects.map((project: ProjectData, index: number) => {
                            return (
                                <InView key={index}>
                                    {({ ref, inView }) => (
                                        <motion.div
                                            ref={ref}
                                            variants={fadeInUp}
                                            initial='initial'
                                            animate={inView ? 'animate' : 'initial'}
                                            className={styles.projectItem}

                                        >
                                            <motion.div
                                                variants={fadeInLeft}
                                                initial='initial'
                                                animate={inView ? 'animate' : 'initial'}
                                                className={styles.imageContainer}
                                            >
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
                                            </motion.div>
                                            <div className={styles.titleContainer}>
                                                <p>{project.title}</p>
                                            </div>
                                            <div
                                                className={styles.descriptionContainer}
                                                dangerouslySetInnerHTML={{ __html: project.resume }}
                                            >
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
                                        </motion.div>
                                    )}

                                </InView>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

