import './topNavBar.css';
import NavBar from '../shared/navbar/NavBar';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TopNavBarProps {
    currentSection: 'home' | 'portfolio' | 'about us' | 'contact';
}

/**
 * Top navigation bar component for the website.
 * 
 * This component displays the main navigation bar at the top of the page. It supports
 * both desktop and mobile views, allowing navigation between sections of the website.
 * 
 * @param {TopNavBarProps} param0 - Props for the TopNavBar component.
 * @param {'home' | 'portfolio' | 'about us' | 'contact'} param0.currentSection - Indicates the current section of the website.
 * @returns {JSX.Element} The rendered TopNavBar component.
 */
const TopNavBar: React.FC<TopNavBarProps> = ({ currentSection }) => {
    const [mbNavBar, setMbNavBar] = useState<boolean>(false);
    const refMobileNavBar = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    /**
     * Side effect to toggle the mobile navigation bar's visibility.
     * 
     * When `mbNavBar` changes, it updates the display style of the mobile
     * navigation bar and adjusts the `body` positioning to prevent scrolling.
     */
    useEffect(() => {
        if (refMobileNavBar.current) {
            refMobileNavBar.current.style.display = mbNavBar ? 'flex' : 'none';
            document.body.style.position = mbNavBar ? 'fixed' : '';
        }
    }, [mbNavBar])

    /**
     * Navigates to the specified section of the website and closes the mobile navigation bar.
     * 
     * @param {string} path - The route to navigate to.
     */
    const gotoSection = (path: string): void => {
        navigate(path);
        setMbNavBar(false);
    }

    return (
        <nav id="topNavBar">
            <div id="topNavBar-logo" onClick={() => gotoSection('/')}></div>
            <NavBar currentSection={currentSection} />
            <button id="burgerBt" className={mbNavBar ? 'closeIcon' : 'burgerIcon'} onClick={()=>setMbNavBar(!mbNavBar)}></button>
            <div ref={refMobileNavBar} id="mobileNavBar">
                <div>
                    <button className='mbNavBarBt' disabled={currentSection === 'home'} aria-label='home' onClick={() => gotoSection('/')}>Home</button>
                    <button className='mbNavBarBt' disabled={currentSection === 'portfolio'} aria-label='portfolio' onClick={() => gotoSection('/portfolio')}>Portfolio</button>
                    <button className='mbNavBarBt' disabled={currentSection === 'about us'} aria-label='about us' onClick={() => gotoSection('/aboutus')}>About Us</button>
                    <button className='mbNavBarBt' disabled={currentSection === 'contact'} aria-label='contact' onClick={() => gotoSection('contact')}>Contact</button>
                </div>
            </div>
        </nav>
    )
}
export default TopNavBar;