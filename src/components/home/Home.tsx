import './home.css';

import HomeSlide from './components/homeSlide/HomeSlide';
import HomeWelcome from './components/homeWelcome/HomeWelcome';

const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeSlide />
            <HomeWelcome />
        </main>
    )
}
export default Home;