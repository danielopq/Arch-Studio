import './aboutUs.css';

import { AboutUsHeader, AboutUsHeritage, AboutUsLeaders } from './components';

const AboutUs: React.FC = () => {
    return (
        <main id="aboutUs">
            <AboutUsHeader />
            <AboutUsHeritage />
            <AboutUsLeaders />
        </main>
    )
}
export default AboutUs;