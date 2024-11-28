import './home.css';
import { HomeSlide, HomeWelcome, HomeBigIdeas, HomeFeatured } from './components';
import { useEffect } from 'react';

interface HomeProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};

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