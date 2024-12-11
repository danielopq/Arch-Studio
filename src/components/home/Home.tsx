import './home.css';
import { HomeSlide, HomeWelcome, HomeBigIdeas, HomeFeatured } from './components';
import { useEffect } from 'react';

interface HomeProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};


/**
 * Represents the home page of the website.
 * 
 * @param {HomeProps} param0 - The props for the Home component.
 * @param {(section: 'home' | 'portfolio' | 'about us' | 'contact') => void} param0.setCurrentSection -  Function to update the current section in the website's navigation state.
 * @returns {JSX.Element} The Home component rendering the home page.
 */
const Home: React.FC<HomeProps> = ({setCurrentSection}) => {

    useEffect(() => {
        setCurrentSection('home');
    }, [])

    return (
        <main id="home">
            <HomeSlide />
            <HomeWelcome />
            <HomeBigIdeas />
            <HomeFeatured />
        </main>
    )
}
export default Home;