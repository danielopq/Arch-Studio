import './topNavBar.css';
import NavBar from '../shared/navbar/NavBar';

interface TopNavBarProps{
    currentSection:'home' | 'portfolio' | 'about us' | 'contact';
}

const TopNavBar:React.FC<TopNavBarProps> = ({currentSection})=>{
    return(
        <nav id="topNavBar">
            <NavBar currentSection={currentSection}/>
        </nav>
    )
}
export default TopNavBar;