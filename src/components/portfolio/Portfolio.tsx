import { useEffect } from 'react';
import './portfolio.css';
import ProjectOverView from '../shared/projectOverView/ProjectOverView';

interface PortfolioProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};

/**
 * Represents the portfolio page of the website.
 * 
 * @param {HomeProps} param0 - The props for the Home component.
 * @param {(section: 'home' | 'portfolio' | 'about us' | 'contact') => void} param0.setCurrentSection -  Function to update the current section in the website's navigation state.
 * @returns {JSX.Element} The Portfolio component rendering the portfolio page.
 */
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
                    desktopImg='/img/projects/seraph-desktop.jpg'
                    tabletImg='/img/projects/seraph-tablet.jpg'
                    mobileImg='/img/projects/seraph-mobile.jpg'
                    gridArea='seraph'
                />
                <ProjectOverView
                    title='Eebox Building'
                    info='August 2017'
                    desktopImg='/img/projects/eebox-desktop.jpg'
                    tabletImg='/img/projects/eebox-tablet.jpg'
                    mobileImg='/img/projects/eebox-mobile.jpg'
                    gridArea='eebox'
                />
                <ProjectOverView
                    title='Federal II Tower'
                    info='March 2017'
                    desktopImg='/img/projects/federal-desktop.jpg'
                    tabletImg='/img/projects/federal-tablet.jpg'
                    mobileImg='/img/projects/federal-mobile.jpg'
                    gridArea='federal'
                />
                <ProjectOverView
                    title='Project Del Sol'
                    info='January 2016'
                    desktopImg='/img/projects/projectDelSol-desktop.jpg'
                    tabletImg='/img/projects/projectDelSol-tablet.jpg'
                    mobileImg='/img/projects/projectDelSol-mobile.jpg'
                    gridArea='sol'
                />
                <ProjectOverView
                    title='Le Prototype'
                    info='October 2015'
                    desktopImg='/img/projects/prototype-desktop.jpg'
                    tabletImg='/img/projects/prototype-tablet.jpg'
                    mobileImg='/img/projects/prototype-mobile.jpg'
                    gridArea='prototype'
                />
                <ProjectOverView
                    title='228B Tower'
                    info='April 2015'
                    desktopImg='/img/projects/tower-desktop.jpg'
                    tabletImg='/img/projects/tower-tablet.jpg'
                    mobileImg='/img/projects/tower-mobile.jpg'
                    gridArea='228B'
                />
                <ProjectOverView
                    title='G. Edelweiss Hotel'
                    info='December 2013'
                    desktopImg='/img/projects/edelweiss-desktop.jpg'
                    tabletImg='/img/projects/edelweiss-tablet.jpg'
                    mobileImg='/img/projects/edelweiss-mobile.jpg'
                    gridArea='edelweiss'
                />
                <ProjectOverView
                    title='Netcry Tower'
                    info='August 2012'
                    desktopImg='/img/projects/netcry-desktop.jpg'
                    tabletImg='/img/projects/netcry-tablet.jpg'
                    mobileImg='/img/projects/netcry-mobile.jpg'
                    gridArea='netcry'
                />
                <ProjectOverView
                    title='Hypers'
                    info='January 2012'
                    desktopImg='/img/projects/hypers-desktop.jpg'
                    tabletImg='/img/projects/hypers-tablet.jpg'
                    mobileImg='/img/projects/hypers-mobile.jpg'
                    gridArea='hypers'
                />
                <ProjectOverView
                    title='SXIV Tower'
                    info='March 2011'
                    desktopImg='/img/projects/sxiv-desktop.jpg'
                    tabletImg='/img/projects/sxiv-tablet.jpg'
                    mobileImg='/img/projects/sxiv-mobile.jpg'
                    gridArea='sxiv'
                />
                <ProjectOverView
                    title='Trinity Bank Tower'
                    info='September 2010'
                    desktopImg='/img/projects/trinity-desktop.jpg'
                    tabletImg='/img/projects/trinity-tablet.jpg'
                    mobileImg='/img/projects/trinity-mobile.jpg'
                    gridArea='trinity'
                />
                <ProjectOverView
                    title='Project Paramour'
                    info='February 2008'
                    desktopImg='/img/projects/paramour-desktop.jpg'
                    tabletImg='/img/projects/paramour-tablet.jpg'
                    mobileImg='/img/projects/paramour-mobile.jpg'
                    gridArea='paramour'
                />
            </div>
        </main>
    )
}
export default Portfolio;