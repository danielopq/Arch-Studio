import { useEffect } from 'react';
import './aboutUs.css';
import { AboutUsHeritage, AboutUsLeaders } from './components';
import SectionHeader from '../shared/sectionHeader/SectionHeader';

interface AboutUsProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};

const AboutUs: React.FC<AboutUsProps> = ({setCurrentSection}) => {

    useEffect(() => {
        setCurrentSection('about us');
    }, [])

    return (
        <main id="aboutUs">
            <SectionHeader />
            <AboutUsHeritage />
            <AboutUsLeaders />
        </main>
    )
}
export default AboutUs;