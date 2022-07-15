import { GetStaticProps } from "next";
import { useContext } from "react";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import Divider from "../components/Divider";
import { Header } from "../components/Header";
import { HeaderBackground } from "../components/HeaderBackground";
import { OthersProjects } from "../components/OthersProjects";
import { Projects } from "../components/Projects";
import { Socials } from "../components/Socials";
import { ToStartButton } from "../components/ToStartButton";
import { ProjectsContext } from "../contexts/ProjectsContext";
import { connectToDatabase } from "../utils/mongodb";

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

interface HomeProps {
  projects: ProjectData[];
  secondaryProjects: ProjectData[];
}

export default function Home({ projects, secondaryProjects }: HomeProps) {
  const { clickInProject } = useContext(ProjectsContext);

  return (
    <>
      <div className="headerWrapper">
        <HeaderBackground />
        <Header />
        <Socials />
      </div>
      {clickInProject ? (
        <div
          style={{
            position: "fixed",
            display: "flex",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100vh",
            width: "100vw",
            background: "#111518",
            zIndex: 10,
          }}
        >
          <img src="/load.svg" alt="loading" width={"100%"} height={"100%"} />
        </div>
      ) : (
        <>
          <Projects projects={projects} />
          <OthersProjects projects={secondaryProjects} />
        </>
      )}
      <Divider />
      <Contact />
      <About />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  const projects = await db
    .collection("projects")
    .find({ arquived: false })
    .sort({ order: 1 })
    .toArray();

  const primaryProjects = projects.filter((proj) => proj.type === "primary");
  const secondaryProjects = projects.filter(
    (proj) => proj.type === "secondary"
  );

  return {
    props: {
      projects: JSON.parse(JSON.stringify(primaryProjects)),
      secondaryProjects: JSON.parse(JSON.stringify(secondaryProjects)),
    },
    revalidate: 60,
  };
};
