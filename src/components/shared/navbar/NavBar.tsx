import './navBar.css';
import NavBarButton from './navBarButton/NavBarButton';

interface NavBarProps{
    currentSection?: '' | 'home' | 'portfolio' | 'about us' | 'contact';
}


/**
 * Represents the main navigation bar component.
 * 
 * This navigation bar is located at the top and bottom of the website and provides links to the main sections of the site.
 * 
 * @param {NavBarProps} param0 - Props for the NavBar component.
 * @param {'' | 'home' | 'portfolio' | 'about us' | 'contact'} [param0.currentSection=''] - The name of the current section. Defaults to an empty string if not provided.
 * @returns {JSX.Element} The NavBar component displaying navigation buttons.
 */
const NavBar: React.FC<NavBarProps> = ({currentSection=''}) => {
    return (
        <div className='navBar'>
            <NavBarButton text='Portfolio' path={'/portfolio'} currentSection={currentSection}/>
            <NavBarButton text='About Us' path={'/aboutus'}  currentSection={currentSection}/>
            <NavBarButton text='Contact' path={'/contact'}  currentSection={currentSection}/>
        </div>
    )
}
export default NavBar;