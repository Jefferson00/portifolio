import styles from "../styles/components/OthersProjects.module.css";
import Link from "next/link";
import { setIconClass } from "../utils/setIconClass";
import { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "../styles/animations";

interface TechnologiesData {
  title: string;
  class: string;
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

interface ProjectsProps {
  projects: ProjectData[];
}

export function OthersProjects({ projects }: ProjectsProps) {
  const { clickedInProject } = useContext(ProjectsContext);

  return (
    <div id="others-projects">
      <div className={styles.sectionTitleContainer}>
        <button disabled>
          <strong>OUTROS PROJETOS</strong>
        </button>
      </div>

      <motion.div className={styles.projectList}>
        {projects.slice(0, 4).map((proj, index) => (
          <InView key={proj.id}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                className={styles.projectItem}
              >
                <header>
                  <p>{proj.title}</p>
                  <div className={styles.links}>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.iconExternal} />
                    </a>
                    <a
                      href={proj.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={styles.iconGithub} />
                    </a>
                  </div>
                </header>
                <Link href={`/projects/${proj.id}#project`}>
                  <a onClick={clickedInProject}>
                    <main>
                      {proj.thumbnail_small ? (
                        <img src={proj.thumbnail_small} alt={proj.title} />
                      ) : (
                        <img src={proj.thumbnail} alt={proj.title} />
                      )}
                      <div
                        className={styles.descriptionContainer}
                        dangerouslySetInnerHTML={{
                          __html: `${proj.resume.substring(0, 240)}...`,
                        }}
                      />
                    </main>
                  </a>
                </Link>
                <footer>
                  {proj.technologies.map(
                    (tech: TechnologiesData, index: number) => {
                      return (
                        <span className={setIconClass(tech.class)} key={index}>
                          <div className={styles.iconsLegend}>{tech.title}</div>
                          <div className={styles.iconsLegendMobile}>
                            <p>{tech.title}</p>
                          </div>
                        </span>
                      );
                    }
                  )}
                </footer>
              </motion.div>
            )}
          </InView>
        ))}
      </motion.div>
    </div>
  );
}
