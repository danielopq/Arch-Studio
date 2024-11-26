import './home.css';

import { HomeSlide, HomeWelcome, HomeBigIdeas, HomeFeatured } from './components';

const Home: React.FC = () => {
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