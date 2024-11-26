import './bottomNavBar.css';
import NavBar from '../shared/navbar/NavBar';
import ArrowButton from '../shared/arrowButton/ArrowButton';

const BottomNavBar: React.FC = () => {
    return (
        <nav id="bottomNavBar">
            <div id="bottomNavBar-logo"></div>
            <div id="bottomNavBar-buttons">
                <div>
                    <NavBar />
                    <ArrowButton text={'See Our Portfolio'} />
                </div>
            </div>
        </nav>
    )
}
export default BottomNavBar;