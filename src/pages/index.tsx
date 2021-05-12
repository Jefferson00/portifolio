import { GetStaticProps } from 'next'
import { useContext } from 'react'
import { Projects } from '../components/Projects'
import { ProjectsContext } from '../contexts/ProjectsContext'
import api from '../services/api'

interface TechnologiesData{
  title:string,
  class:string
}

interface ProjectData{
  id:string;
  title:string;
  description:string;
  technologies:TechnologiesData[];
  repository:string;
  link:string;
  thumbnail:string;
}

interface HomeProps{
  projects: ProjectData[];
}

export default function Home({projects} :HomeProps) {
  const {clickInProject} = useContext(ProjectsContext);

  console.log('result: '+projects)

  return (
      <>
        {clickInProject ? (
            <div style={{position:'fixed', display:'flex', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', height:'100vh',width:'100vw', background:'#111518', zIndex:10}}>
              <img src="/load.svg" alt="loading" width={"100%"} height={'100%'}/>
            </div>
        ): (
          <>
            <Projects projects={projects}/>
          </>
        )}
      </>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  const {data} = await api.get('/api/projects')

  const projects = data.map(project =>{
      return{
          id: project.id,
          title:project.title,
          description:project.description,
          technologies:project.technologies,
          repository:project.repository,
          link:project.link,
          thumbnail:project.thumbnail,
      }
  })

  return{
      props:{
          projects
      },
      revalidate:60*60*8,
  }
}