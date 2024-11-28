import './navBar.css';
import NavBarButton from './navBarButton/NavBarButton';

const NavBar: React.FC = () => {
    return (
        <div className='navBar'>
            <NavBarButton text='Portfolio' path={'/portfolio'} />
            <NavBarButton text='About Us' path={'/aboutus'}  />
            <NavBarButton text='Contact' path={'/contact'}  />
        </div>
    )
}
export default NavBar;