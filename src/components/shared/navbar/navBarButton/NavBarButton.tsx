import { useNavigate } from 'react-router-dom';
import './navBarButton.css';
import { useEffect, useState } from 'react';

interface NavBarButtonProps {
    text: string;
    path: string;
    currentSection?: '' | 'home' | 'portfolio' | 'about us' | 'contact';
}

/**
 * Represents a button in the navigation bar.
 * 
 * This button allows navigation to different sections of the website. It gets disabled when it matches the current section.
 * 
 * @param {NavBarButtonProps} param0 - Props for the NavBarButton component.
 * @param {string} param0.text - The text displayed on the button. 
 * @param {string} param0.path - The path to navigate to when the button is clicked.
 * @param {'' | 'home' | 'portfolio' | 'about us' | 'contact'} [param0.currentSection=''] - The name of the current section. Defaults to an empty string if not provided.
 * @returns {JSX.Element} The NavBarButton component rendering a navigational button.
 */
const NavBarButton: React.FC<NavBarButtonProps> = ({ text, path,currentSection=''}) => {
    const [disabled,setDisabled] = useState<boolean>(false);

    useEffect(()=>{
        setDisabled(text.toLocaleLowerCase() === currentSection);
    },[currentSection])

    const navigate = useNavigate();
    return (
        <div className={'navBarButton ' + (disabled ? 'nb-disabled' : 'nb-notDisabled')} aria-label={text} onClick={() => navigate(path)}>
            <p>{text}</p>
            <div className='btUnderline'></div>
        </div>

    )
}
export default NavBarButton;