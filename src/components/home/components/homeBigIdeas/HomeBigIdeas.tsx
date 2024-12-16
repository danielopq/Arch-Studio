import './homeBigIdeas.css';
import ArrowButton from '../../../shared/arrowButton/ArrowButton';
import { useNavigate } from 'react-router-dom';

/**
 * Component that renders the "Home Big Ideas" section on the home page.
 * This section highlights the slogan "Small team, big ideas" and includes a call-to-action button.
 * 
 * @returns {JSX.Element} - HomeBigIdeas component. 
 */
const HomeBigIdeas:React.FC = () =>{

    const navigate = useNavigate();

    return(
        <section id="homeBigIdeas">
            <div>
                <h3>Small team, big ideas</h3>
                <ArrowButton text={'About Us'} handleClick={()=>navigate('/aboutus')}/>
            </div>
        </section>
    )
}
export default HomeBigIdeas;