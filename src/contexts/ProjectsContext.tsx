import {createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface ProjectsContextData{
    isButtonClicked:boolean;
    isModalOpen:boolean;
    selectedProject:ProjectData;
    updateButtonClicked: () => void;
    closeModal: () => void;
    openModal: (project:ProjectData) => void;
}

interface ProjectsProviderProps{
    children: ReactNode;
}

interface TechnologiesData{
    title:string;
    class:string;
}

interface GalleryData{
    image:string;
}

interface ProjectData{
    title:string;
    description:string;
    technologies:TechnologiesData[];
    repository:string;
    link:string;
    thumbnail:string;
    gallery:GalleryData[];
}

export const ProjectsContext = createContext({} as ProjectsContextData)

export function ProjectsProvider({children}:ProjectsProviderProps){
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState<ProjectData>()

    function updateButtonClicked(){
        setIsButtonClicked(true)
    }

    function openModal(project:ProjectData){
        setIsModalOpen(true)
        setSelectedProject(project)
    }

    function closeModal(){
        setTimeout(()=>{
            setIsModalOpen(false)
        },1000)
    }

    useEffect(()=>{
    },[isButtonClicked])

    return(
        <ProjectsContext.Provider value={{
            isButtonClicked,
            isModalOpen,
            selectedProject,
            updateButtonClicked,
            openModal,
            closeModal,
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}