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
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='seraph'
                />
                <ProjectOverView
                    title='Eebox Building'
                    info='August 2017'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='eebox'
                />
                <ProjectOverView
                    title='Federal II Tower'
                    info='March 2017'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='federal'
                />
                <ProjectOverView
                    title='Project Del Sol'
                    info='January 2016'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='sol'
                />
                <ProjectOverView
                    title='Le Prototype'
                    info='October 2015'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='prototype'
                />
                <ProjectOverView
                    title='228B Tower'
                    info='April 2015'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='228B'
                />
                <ProjectOverView
                    title='Grand Edelweiss Hotel'
                    info='December 2013'
                    desktopImg='Nectry Tower'
                    tabletImg=''
                    mobileImg=''
                    gridArea='edelweiss'
                />
                <ProjectOverView
                    title='Nectry Tower'
                    info='August 2012'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='nectry'
                />
                <ProjectOverView
                    title='Hypers'
                    info='January 2012'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='hypers'
                />
                <ProjectOverView
                    title='SXIV Tower'
                    info='March 2011'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='sxiv'
                />
                <ProjectOverView
                    title='Trinity Bank Tower'
                    info='September 2010'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='trinity'
                />
                <ProjectOverView
                    title='Project Paramour'
                    info='February 2008'
                    desktopImg=''
                    tabletImg=''
                    mobileImg=''
                    gridArea='paramour'
                />
            </div>
        </main>
    )
}
export default Portfolio;