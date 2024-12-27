import './bottomNavBar.css';
import NavBar from '../shared/navbar/NavBar';
import ArrowButton from '../shared/arrowButton/ArrowButton';
import { useNavigate } from 'react-router-dom';

/**
 * Renders the bottom navigation bar of the website.
 * 
 * This component provides a compact navigation area located at the bottom of the page.
 * It includes the main navigation menu and a button for viewing the portfolio.
 * 
 * @returns {JSX.Element} The BottomNavBar component.
 */
const BottomNavBar: React.FC = () => {

    const navigate = useNavigate();

    return (
        <nav id="bottomNavBar">
            <div id="bottomNavBar-logo" onClick={()=>navigate('/')}></div>
            <div id="bottomNavBar-buttons">
                <div>
                    <NavBar />
                    <ArrowButton text={'See Our Portfolio'} handleClick={()=>navigate('/portfolio')}/>
                </div>
            </div>
        </nav>
    )
}
export default BottomNavBar;