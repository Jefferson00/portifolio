import Link from "next/link";
import { motion } from "framer-motion";
import { easing } from "../../styles/animations";

import styles from "../../styles/management.module.css";
import ProjectCard from "../../components/ProjectCard";
import { GetStaticProps } from "next";
import { connectToDatabase } from "../../utils/mongodb";
import { useEffect, useState } from "react";

interface TechnologiesData {
  title: string;
  class: string;
}

interface ProjectData {
  _id: string;
  id: string;
  title: string;
  description: string;
  technologies: TechnologiesData[];
  repository: string;
  link: string;
  thumbnail: string;
  thumbnail_small: string;
  resume: string;
  useCase: string;
  order: number;
  type: string;
  arquived: boolean;
  gallery: {
    image: string;
  }[];
}

interface ProjectsProps {
  projects: ProjectData[];
}

export default function ProjectsManagement({ projects }: ProjectsProps) {
  const [projectsState, setProjectsSate] = useState(projects);

  useEffect(() => {
    console.log(projects);
  }, [projects]);
  return (
    <>
      <header className={styles.header}>
        <Link href={"/#projects"}>
          <motion.img
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: easing,
            }}
            src="/logo.svg"
            alt="Jefferson Dev"
          />
        </Link>
      </header>

      <div className={styles.sectionTitleContainer}>
        <button disabled>
          <strong>PROJETOS</strong>
        </button>
      </div>

      <main className={styles.main}>
        {projectsState.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const projects = await db
    .collection("projects")
    .find()
    .sort({ order: 1 })
    .toArray();

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
    revalidate: 60,
  };
};
