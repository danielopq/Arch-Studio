import './homeFeatured.css';
import ProjectOverView from '../../../shared/projectOverView/ProjectOverView';
import ArrowButton from '../../../shared/arrowButton/ArrowButton';
import { useNavigate } from 'react-router-dom';

const HomeFeatured: React.FC = () => {

    const navigate = useNavigate();

    return (
        <section id="homeFeatured" >
            <div id="homeFeatured-top" >
                <h3>Featured</h3>
                <ArrowButton text='See All' handleClick={()=>navigate('/portfolio')}/>
            </div>
            <div id="homeFeatured-projects">
                <ProjectOverView
                    number={'1'}
                    title='Project Del Sol'
                    info='View All Projects'
                    desktopImg='/img/projects/projectDelSol-desktop.jpg'
                    tabletImg='/img/projects/projectDelSol-tablet.jpg'
                    mobileImg='/img/projects/projectDelSol-mobile.jpg'
                />
                <ProjectOverView
                    number={'2'}
                    title='228B Tower'
                    info='View All Projects'
                    desktopImg='/img/projects/tower-desktop.jpg'
                    tabletImg='/img/projects/tower-tablet.jpg'
                    mobileImg='/img/projects/tower-mobile.jpg'
                />
                <ProjectOverView
                    number={'3'}
                    title='Le Prototype'
                    info='View All Projects'
                    desktopImg='/img/projects/prototype-desktop.jpg'
                    tabletImg='/img/projects/prototype-tablet.jpg'
                    mobileImg='/img/projects/prototype-mobile.jpg'
                />
            </div>
            <div id="homeFeatured-bottom" >
                <ArrowButton text='See All' />
            </div>
        </section>
    )
}
export default HomeFeatured;