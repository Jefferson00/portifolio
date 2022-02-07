import {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

interface ProjectsContextData{
    isButtonClicked:boolean;
    isModalOpen:boolean;
    clickInProject:boolean;
    selectedProject:ProjectData;
    positionX:number;
    positionY:number;
    setPositionX: Dispatch<SetStateAction<number>>;
    setPositionY: Dispatch<SetStateAction<number>>;
    clickedInProject: () => void;
    loadedProject: () => void;
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
    const [clickInProject, setClickInProject] = useState(false)

    const [positionX, setPositionX] = useState<number>();
    const [positionY, setPositionY] = useState<number>();

    function clickedInProject(){
        setClickInProject(true)
    }

    function loadedProject(){
        setClickInProject(false)
    }

    function updateButtonClicked(){
        setIsButtonClicked(!isButtonClicked)
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
            clickInProject,
            selectedProject,
            positionX,
            positionY,
            setPositionX,
            setPositionY,
            updateButtonClicked,
            loadedProject,
            clickedInProject,
            openModal,
            closeModal,
        }}>
            {children}
        </ProjectsContext.Provider>
    )
}