import { useEffect, useState } from 'react';
import './homeSlide.css';

import SlideButton from './slideButton/SlideButton';
import SlideProject from './slideProject/SlideProject';
import ArrowButton from '../../../shared/arrowButton/ArrowButton';
import { useNavigate } from 'react-router-dom';


/**
 * HomeSlide Component
 * 
 * This component renders a slideshow featuring various company projects.
 * It includes automatic transitions between projects, with a navigation bar 
 * to manually select specific projects (for the desktop version).
 */
const HomeSlide: React.FC = () => {

    const [currentProject, setCurrentProject] = useState<number>(0);
    const [projectsOpacity, setProjectsOpacity] = useState<string[]>(['1', '0', '0', '0']);

    const navigate = useNavigate();

    /**
     * Updates the opacity of the projects to display the selected project.
     * 
     * @param projectNum - The index of the project to display.
     */
    const displayProject = (projectNum:number):void=>{
        let newProjectsOpacity:string[] = ['0', '0', '0', '0'];
        newProjectsOpacity[projectNum] = '1';
        setProjectsOpacity(newProjectsOpacity);
        setCurrentProject(projectNum);
    }

    // Effect to handle the automatic slideshow transitions
    useEffect(() => {
        const runSlide = () => {
            (currentProject === projectsOpacity.length - 1) ? displayProject(0) : displayProject(currentProject + 1);
        };
        const intervalId = setInterval(runSlide, 5000);
        return () => clearInterval(intervalId);
    }, [currentProject]);

    return (
        <section id="homeSlide">
            <ArrowButton text='See Our Portfolio' handleClick={()=>navigate('/portfolio')}/>
            <SlideProject
                zIndex='1'
                opacity={projectsOpacity[0]}
                title='Project Paramour'
                mainText='Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.'
                desktopImg='/img/home/paramour-desktop.jpg'
                tabletImg='/img/home/paramour-tablet.jpg'
                mobileImg='/img/home/paramour-mobile.jpg'
            />
            <SlideProject
                zIndex='2'
                opacity={projectsOpacity[1]}
                title='Seraph Station'
                mainText='The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.'
                desktopImg='/img/home/seraph-desktop.jpg'
                tabletImg='/img/home/seraph-tablet.jpg'
                mobileImg='/img/home/seraph-mobile.jpg'
            />
            <SlideProject
                zIndex='3'
                opacity={projectsOpacity[2]}
                title='Federal II Tower'
                mainText='A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches. '
                desktopImg='/img/home/federal-desktop.jpg'
                tabletImg='/img/home/federal-tablet.jpg'
                mobileImg='/img/home/federal-mobile.jpg'
            />
            <SlideProject
                zIndex='4'
                opacity={projectsOpacity[3]}
                title='Trinity Bank Tower'
                mainText='Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.'
                desktopImg='/img/home/trinity-desktop.jpg'
                tabletImg='/img/home/trinity-tablet.jpg'
                mobileImg='/img/home/trinity-mobile.jpg'
            />
            
            <nav id="homeSlideNavBar">
                <SlideButton text='01' disabled={currentProject === 0} displayProject={() => displayProject(0)}/>
                <SlideButton text='02' disabled={currentProject === 1} displayProject={() => displayProject(1)}/>
                <SlideButton text='03' disabled={currentProject === 2} displayProject={() => displayProject(2)}/>
                <SlideButton text='04' disabled={currentProject === 3} displayProject={() => displayProject(3)}/>
            </nav>
        </section>
    )
}
export default HomeSlide;