import './navBar.css';
import NavBarButton from './navBarButton/NavBarButton';

const NavBar: React.FC = () => {
    return (
        <div className='navBar'>
            <NavBarButton text='Portfolio' />
            <NavBarButton text='About Us' />
            <NavBarButton text='Contact' />
        </div>
    )
}
export default NavBar;