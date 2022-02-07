import { GetStaticProps } from 'next'
import styles from '../styles/components/Background.module.css'
import { useContext, useRef, useEffect, useState } from 'react'
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { Projects } from '../components/Projects'
import { Socials } from '../components/Socials';
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
  thumbnail_small: string;
  resume: string;
}

interface HomeProps {
  projects: ProjectData[];
}

export default function Home({ projects }: HomeProps) {
  const { clickInProject } = useContext(ProjectsContext);
  const [positionX, setPositionX] = useState<number>();
  const [positionY, setPositionY] = useState<number>();
  const hiddenRef = useRef<HTMLDivElement>(null);
  const repeat = 5;
  let timeout

  useEffect(() => {
    hiddenRef.current.addEventListener('mousemove', (event) => {
      if(timeout) clearTimeout(timeout);
      setPositionX(event.clientX + 751)
      setPositionY(event.clientY + 379)
    })
  },[])

  return (
    <>
      {clickInProject ? (
        <div style={{ position: 'fixed', display: 'flex', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', height: '100vh', width: '100vw', background: '#111518', zIndex: 10 }}>
          <img src="/load.svg" alt="loading" width={"100%"} height={'100%'} />
        </div>
      ) : (
        <>
        <div className="headerWrapper" ref={hiddenRef}>
          <Header />
          <Socials />
          <div className={styles.hiddenContainer} ref={hiddenRef} />
          <div 
        className={styles.backgroundContainer} 
        style={{
          WebkitMaskPositionX: `${positionX}px`,
          WebkitMaskPositionY: `${positionY}px`,
        }}  
      >
      
    </div>
        </div>
          <Projects projects={projects} />
          <Contact />
          <About />
        </>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {


  const db = await connectToDatabase(process.env.MONGODB_URI);


  const projects = await db
    .collection('projects')
    .find({ "arquived": false })
    .sort({ order: 1 })
    .toArray();

  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects))
    },
    revalidate: 60,
  }
}