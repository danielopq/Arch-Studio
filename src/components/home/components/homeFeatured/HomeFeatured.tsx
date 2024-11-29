import './homeFeatured.css';
import ProjectOverView from '../../../shared/projectOverView/ProjectOverView';
import ArrowButton from '../../../shared/arrowButton/ArrowButton';

const HomeFeatured: React.FC = () => {
    return (
        <section id="homeFeatured" >
            <div>
                <h3>Featured</h3>
                <ArrowButton text='See All'/>
            </div>
            <div>
                <ProjectOverView
                    number={'1'}
                    title='Project Del Sol'
                    info='View All Projects'
                    desktopImg='./public/img/projects/projectDelSol-desktop.jpg'
                    tabletImg='./public/img/projects/projectDelSol-tablet.jpg'
                    mobileImg='./public/img/projects/projectDelSol-mobile.jpg'
                />
                <ProjectOverView
                    number={'2'}
                    title='228B Tower'
                    info='View All Projects'
                    desktopImg='./public/img/projects/tower-desktop.jpg'
                    tabletImg='./public/img/projects/tower-tablet.jpg'
                    mobileImg='./public/img/projects/tower-mobile.jpg'
                />
                <ProjectOverView
                    number={'3'}
                    title='Le Protype'
                    info='View All Projects'
                    desktopImg='./public/img/projects/prototype-desktop.jpg'
                    tabletImg='./public/img/projects/prototype-tablet.jpg'
                    mobileImg='./public/img/projects/prototype-mobile.jpg'
                />
            </div>
        </section>
    )
}
export default HomeFeatured;