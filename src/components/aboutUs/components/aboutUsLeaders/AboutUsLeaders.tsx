import './aboutUsLeaders.css';
import Leader from './leader/Leader';
const AboutUsLeaders:React.FC = () =>{
    return(
        <section id="aboutUsLeaders">
            <h3>The Leaders</h3>
            <div id="leaderProfiles">
                <Leader name='Jake Richards' position='Chief Architect' backgroundImage='./img/about/jake.jpg' gridArea='Jake'/>
                <Leader name='Thompson Smith' position='Head of Finance' backgroundImage='./img/about/thompson.jpg' gridArea='Thompson'/>
                <Leader name='Jackson Rourke' position='Lead Designer' backgroundImage='./img/about/jackson.jpg' gridArea='Jackson'/>
                <Leader name='Maria Simpson' position='Senior Architect' backgroundImage='./img/about/maria.jpg' gridArea='Maria'/>
            </div>
        </section>
    )
}
export default AboutUsLeaders;