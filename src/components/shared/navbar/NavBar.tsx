import './navBar.css';
import NavBarButton from './navBarButton/NavBarButton';

interface NavBarProps{
    currentSection?: '' | 'home' | 'portfolio' | 'about us' | 'contact';
}

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