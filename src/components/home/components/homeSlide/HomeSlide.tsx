import { useState } from 'react';
import './homeSlide.css';

import SlideButton from './slideButton/SlideButton';
import SlideProject from './slideProject/SlideProject';

const HomeSlide: React.FC = () => {

    const [currentProject, setCurrentProject] = useState<number>(0);
    const [projectsOpacity, setProjectsOpacity] = useState<number[]>([1, 0, 0, 0]);

    const displayProject = (projectNum:number):void=>{

    }

    return (
        <section id="homeSlide">
            <SlideProject
                zIndex='1'
                opacity='0'
                title='Project Paramour'
                mainText='Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.'
                desktopImg='./img/home/paramour-desktop.jpg'
                tabletImg='./img/home/paramour-desktop.jpg'
                mobileImg='./img/home/paramour-desktop.jpg'
            />
            <SlideProject
                zIndex='2'
                opacity='0'
                title='Seraph Station'
                mainText='The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.'
                desktopImg='./img/home/seraph-desktop.jpg'
                tabletImg='./img/home/seraph-desktop.jpg'
                mobileImg='./img/home/seraph-desktop.jpg'
            />
            <SlideProject
                zIndex='3'
                opacity='0'
                title='Federal II Tower'
                mainText='A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches. '
                desktopImg='./img/home/federal-desktop.jpg'
                tabletImg='./img/home/federal-desktop.jpg'
                mobileImg='./img/home/federal-desktop.jpg'
            />
            <SlideProject
                zIndex='4'
                opacity='1                                                                                  '
                title='Trinity Bank Tower'
                mainText='Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.'
                desktopImg='./img/home/trinity-desktop.jpg'
                tabletImg='./img/home/trinity-desktop.jpg'
                mobileImg='./img/home/trinity-desktop.jpg'
            />
            <nav id="homeSlideNavBar">
                <SlideButton text='01' disabled={true} displayProject={() => displayProject(0)}/>
                <SlideButton text='02' disabled={true} displayProject={() => displayProject(1)}/>
                <SlideButton text='03' disabled={true} displayProject={() => displayProject(2)}/>
                <SlideButton text='04' disabled={true} displayProject={() => displayProject(3)}/>
            </nav>
        </section>
    )
}
export default HomeSlide;