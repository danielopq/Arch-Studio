import { useEffect } from 'react';
import './portfolio.css';

interface PortfolioProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};

const Portfolio: React.FC<PortfolioProps> = ({ setCurrentSection }) => {

    useEffect(() => {
        setCurrentSection('portfolio');
    }, [])

    return (
        <main id="portfolio">
            <div id="portfolioMosaic"></div>
        </main>
    )
}
export default Portfolio;