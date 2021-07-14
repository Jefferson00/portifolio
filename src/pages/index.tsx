import { GetStaticProps } from 'next'
import { useContext } from 'react'
import { Projects } from '../components/Projects'
import { ProjectsContext } from '../contexts/ProjectsContext';
import { connectToDatabase } from '../utils/mongodb';

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
}

interface HomeProps {
  projects: ProjectData[];
}

export default function Home({ projects }: HomeProps) {
  const { clickInProject } = useContext(ProjectsContext);

  return (
    <>
      {clickInProject ? (
        <div style={{ position: 'fixed', display: 'flex', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '100vh', width: '100vw', background: '#111518', zIndex: 10 }}>
          <img src="/load.svg" alt="loading" width={"100%"} height={'100%'} />
        </div>
      ) : (
        <>
          <Projects projects={projects} />
        </>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {


  const db = await connectToDatabase(process.env.MONGODB_URI);


  const projects = await db
    .collection('projects')
    .find({})
    .sort({ order: 1 })
    .toArray();

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects))
    },
    revalidate: 60,
  }
}