import { useEffect } from 'react';
import './aboutUs.css';
import { AboutUsHeritage, AboutUsLeaders } from './components';
import SectionHeader from '../shared/sectionHeader/SectionHeader';

interface AboutUsProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};

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
                desktopImg='./public/img/about/AboutHeadPic-desktop.jpg'
                tabletImg='./public/img/about/AboutHeadPic-tablet.jpg'
                mobileImg='./public/img/about/AboutHeadPic-mobile.jpg'
            />
            <AboutUsHeritage />
            <AboutUsLeaders />
        </main>
    )
}
export default AboutUs;