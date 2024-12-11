import './topNavBar.css';
import NavBar from '../shared/navbar/NavBar';

interface TopNavBarProps{
    currentSection:'home' | 'portfolio' | 'about us' | 'contact';
}

/**
 * Represents the top navigation bar of the website.
 * 
 * Contains the main navigation bar located on the top of the website.
 * 
 * @param {TopNavBarProps} param0 - The props for the TopNavBar component.
 * @param {'home' | 'portfolio' | 'about us' | 'contact'} param0.currentSection - The name of the current section.
 * @returns {JSX.Element} The TopNavBar component displaying the navigation bar.
 */
const TopNavBar:React.FC<TopNavBarProps> = ({currentSection})=>{
    return(
        <nav id="topNavBar">
            <NavBar currentSection={currentSection}/>
        </nav>
    )
}
export default TopNavBar;