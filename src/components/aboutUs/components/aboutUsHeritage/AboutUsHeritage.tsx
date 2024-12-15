import './aboutUsHeritage.css';

/**
 * A component included in the "About Us" section, containing the main text
 * about the company's heritage and values.
 * 
 * @returns {JSX.Element} - The AboutUsHeritage component.
 */
const AboutUsHeritage: React.FC = () => {
    return (
        <section id="aboutUsHeritage">
            <div className='decoLine'></div>
            <h3>Our Heritage</h3>
            <div className='defaultText'>
                <p>
                    Founded in 2007, we started as a trio of architects. Our complimentary skills
                    and relentless attention to detail turned Arch into one of the most sought
                    after boutique firms in the country.
                </p>
                <p>
                    Speciliazing in Urban Design allowed us to focus on creating exceptional
                    structures that live in harmony with their surroundings. We consider every
                    detail from every surrounding element to inform our designs.
                </p>
                <p>
                    Our small team of world-class professionals provides input on every project.
                </p>
            </div>
        </section>
    )
}
export default AboutUsHeritage;