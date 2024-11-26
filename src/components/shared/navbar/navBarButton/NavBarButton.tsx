import './navBarButton.css';

interface NavBarButtonProps {
    text: string;
    disabled?: boolean;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ text, disabled = false }) => {
    return (
        <button className='navBarButton' disabled={disabled}>
            <p>{text}</p>
            <div></div>
        </button>

    )
}
export default NavBarButton;