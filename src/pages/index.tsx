import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Projects } from '../components/Projects'
import { Socials } from '../components/Socials'
import { Technologies } from '../components/Technologies'
import { ProjectsProvider } from '../contexts/ProjectsContext'
import { About } from '../components/About'
import { Modal } from '../components/Modal'

export default function Home() {
  
  return (
      <>
      <ProjectsProvider>
          <Header/>
          <Socials/>
          <Technologies/>
          <Button/>
          <Projects/>
          <About/>
          <Modal/>
      </ProjectsProvider>
      </>
  )
}
