import './navBarButton.css';

interface NavBarButtonProps {
    text: string;
    active?: boolean;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ text, active = false }) => {
    return (
        <button className='navBarButton'>
            <p>{text}</p>
            <div></div>
        </button>

    )
}
export default NavBarButton;