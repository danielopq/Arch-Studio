import { useEffect } from 'react';
import './aboutUs.css';
import { AboutUsHeritage, AboutUsLeaders } from './components';
import SectionHeader from '../shared/sectionHeader/SectionHeader';

interface AboutUsProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;  // Function to set the current section of the website
};

/**
 * Component for rendering the "About Us" section of the website.
 * This section provides an overview of the team's expertise and values.
 * 
 * @param {AboutUsProps} props - The props for the AboutUs component.
 * @param {function} props.setCurrentSection - Function to update the currently active section of the site.
 * @returns {JSX.Element} The rendered About Us component.
 */
const AboutUs: React.FC<AboutUsProps> = ({ setCurrentSection }) => {

    const headerText: string = 'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.'

    useEffect(() => {
        setCurrentSection('about us');
    }, [])

    return (
        <main id="aboutUs">
            <SectionHeader
                section='About'
                header='Your team of professionals'
                text={headerText}
                desktopImg='/img/about/AboutHeadPic-desktop.jpg'
                tabletImg='/img/about/AboutHeadPic-tablet.jpg'
                mobileImg='/img/about/AboutHeadPic-mobile.jpg'
            />
            <AboutUsHeritage />
            <AboutUsLeaders />
        </main>
    )
}
export default AboutUs;