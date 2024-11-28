import { useNavigate } from 'react-router-dom';
import './navBarButton.css';

interface NavBarButtonProps {
    text: string;
    path: string;
    disabled?: boolean;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ text, path, disabled = false }) => {
    const navigate = useNavigate();
    return (
        <button className='navBarButton' disabled={disabled} aria-label={text} onClick={() => navigate(path)}>
            <p>{text}</p>
            <div></div>
        </button>

    )
}
export default NavBarButton;