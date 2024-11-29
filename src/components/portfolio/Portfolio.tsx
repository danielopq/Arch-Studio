import { useEffect } from 'react';
import './portfolio.css';
import ProjectOverView from '../shared/projectOverView/ProjectOverView';

interface PortfolioProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};

const Portfolio: React.FC<PortfolioProps> = ({ setCurrentSection }) => {

    useEffect(() => {
        setCurrentSection('portfolio');
    }, [])

    return (
        <main id="portfolio">
            <div id="portfolioMosaic">
                <ProjectOverView
                    title='Seraph Station'
                    info='September 2019'
                    desktopImg='./public/img/projects/seraph-desktop.jpg'
                    tabletImg='./public/img/projects/seraph-tablet.jpg'
                    mobileImg='./public/img/projects/seraph-mobile.jpg'
                    gridArea='seraph'
                />
                <ProjectOverView
                    title='Eebox Building'
                    info='August 2017'
                    desktopImg='./public/img/projects/eebox-desktop.jpg'
                    tabletImg='./public/img/projects/eebox-tablet.jpg'
                    mobileImg='./public/img/projects/eebox-mobile.jpg'
                    gridArea='eebox'
                />
                <ProjectOverView
                    title='Federal II Tower'
                    info='March 2017'
                    desktopImg='./public/img/projects/federal-desktop.jpg'
                    tabletImg='./public/img/projects/federal-tablet.jpg'
                    mobileImg='./public/img/projects/federal-mobile.jpg'
                    gridArea='federal'
                />
                <ProjectOverView
                    title='Project Del Sol'
                    info='January 2016'
                    desktopImg='./public/img/projects/projectDelSol-desktop.jpg'
                    tabletImg='./public/img/projects/projectDelSol-tablet.jpg'
                    mobileImg='./public/img/projects/projectDelSol-mobile.jpg'
                    gridArea='sol'
                />
                <ProjectOverView
                    title='Le Prototype'
                    info='October 2015'
                    desktopImg='./public/img/projects/prototype-desktop.jpg'
                    tabletImg='./public/img/projects/prototype-tablet.jpg'
                    mobileImg='./public/img/projects/prototype-mobile.jpg'
                    gridArea='prototype'
                />
                <ProjectOverView
                    title='228B Tower'
                    info='April 2015'
                    desktopImg='./public/img/projects/tower-desktop.jpg'
                    tabletImg='./public/img/projects/tower-tablet.jpg'
                    mobileImg='./public/img/projects/tower-mobile.jpg'
                    gridArea='228B'
                />
                <ProjectOverView
                    title='G. Edelweiss Hotel'
                    info='December 2013'
                    desktopImg='./public/img/projects/edelweiss-desktop.jpg'
                    tabletImg='./public/img/projects/edelweiss-tablet.jpg'
                    mobileImg='./public/img/projects/edelweiss-mobile.jpg'
                    gridArea='edelweiss'
                />
                <ProjectOverView
                    title='Netcry Tower'
                    info='August 2012'
                    desktopImg='./public/img/projects/netcry-desktop.jpg'
                    tabletImg='./public/img/projects/netcry-tablet.jpg'
                    mobileImg='./public/img/projects/netcry-mobile.jpg'
                    gridArea='netcry'
                />
                <ProjectOverView
                    title='Hypers'
                    info='January 2012'
                    desktopImg='./public/img/projects/hypers-desktop.jpg'
                    tabletImg='./public/img/projects/hypers-tablet.jpg'
                    mobileImg='./public/img/projects/hypers-mobile.jpg'
                    gridArea='hypers'
                />
                <ProjectOverView
                    title='SXIV Tower'
                    info='March 2011'
                    desktopImg='./public/img/projects/sxiv-desktop.jpg'
                    tabletImg='./public/img/projects/sxiv-tablet.jpg'
                    mobileImg='./public/img/projects/sxiv-mobile.jpg'
                    gridArea='sxiv'
                />
                <ProjectOverView
                    title='Trinity Bank Tower'
                    info='September 2010'
                    desktopImg='./public/img/projects/trinity-desktop.jpg'
                    tabletImg='./public/img/projects/trinity-tablet.jpg'
                    mobileImg='./public/img/projects/trinity-mobile.jpg'
                    gridArea='trinity'
                />
                <ProjectOverView
                    title='Project Paramour'
                    info='February 2008'
                    desktopImg='./public/img/projects/paramour-desktop.jpg'
                    tabletImg='./public/img/projects/paramour-tablet.jpg'
                    mobileImg='./public/img/projects/paramour-mobile.jpg'
                    gridArea='paramour'
                />
            </div>
        </main>
    )
}
export default Portfolio;