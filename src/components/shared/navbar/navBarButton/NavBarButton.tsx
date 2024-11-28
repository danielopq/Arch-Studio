import { useNavigate } from 'react-router-dom';
import './navBarButton.css';
import { useEffect, useState } from 'react';

interface NavBarButtonProps {
    text: string;
    path: string;
    currentSection?: '' | 'home' | 'portfolio' | 'about us' | 'contact';
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ text, path,currentSection=''}) => {
    const [disabled,setDisabled] = useState<boolean>(false);

    useEffect(()=>{
        setDisabled(text.toLocaleLowerCase() === currentSection);
    },[currentSection])

    const navigate = useNavigate();
    return (
        <button className='navBarButton' disabled={disabled} aria-label={text} onClick={() => navigate(path)}>
            <p>{text}</p>
            <div></div>
        </button>

    )
}
export default NavBarButton;