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
                    desktopImg='url(./public/img/home/projects/projectDelSol-desktop.jpg)'
                    tabletImg='url(./public/img/home/projects/projectDelSol-tablet.jpg)'
                    mobileImg='url(./public/img/home/projects/projectDelSol-mobile.jpg)'
                />
                <ProjectOverView
                    number={'2'}
                    title='228B Tower'
                    desktopImg='url(./public/img/home/projects/tower-desktop.jpg)'
                    tabletImg='url(./public/img/home/projects/tower-tablet.jpg)'
                    mobileImg='url(./public/img/home/projects/tower-mobile.jpg)'
                />
                <ProjectOverView
                    number={'3'}
                    title='Le Protype'
                    desktopImg='url(./public/img/home/projects/prototype-desktop.jpg)'
                    tabletImg='url(./public/img/home/projects/prototype-tablet.jpg)'
                    mobileImg='url(./public/img/home/projects/prototype-mobile.jpg)'
                />
            </div>
        </section>
    )
}
export default HomeFeatured;