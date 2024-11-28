import { useEffect } from 'react';
import './aboutUs.css';
import { AboutUsHeader, AboutUsHeritage, AboutUsLeaders } from './components';

interface AboutUsProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};

const AboutUs: React.FC<AboutUsProps> = ({setCurrentSection}) => {

    useEffect(() => {
        setCurrentSection('about us');
    }, [])

    return (
        <main id="aboutUs">
            <AboutUsHeader />
            <AboutUsHeritage />
            <AboutUsLeaders />
        </main>
    )
}
export default AboutUs;