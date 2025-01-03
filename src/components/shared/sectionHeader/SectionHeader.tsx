import { useEffect, useState } from 'react';
import './sectionHeader.css';

interface SectionHeaderProps {
    section: string;      // The name of the section (e.g., "About", "Contact").
    header: string;       // The header text displayed prominently in the section.
    text: string;         // Additional descriptive text displayed in the header.
    desktopImg: string;   // Path to the background image for desktop view.
    tabletImg: string;    // Path to the background image for tablet view.
    mobileImg: string;    // Path to the background image for mobile view.
}

/**
 * Renders the header for a website section, such as "About" or "Contact".
 * The header includes a section name, a primary header, descriptive text, 
 * and a responsive background image that changes based on the viewport size.
 * 
 * @param {SectionHeaderProps} props - The properties object.
 * @param {string} props.section - The name of the section.
 * @param {string} props.header - The main header text for the section.
 * @param {string} props.text - Additional descriptive text.
 * @param {string} props.desktopImg - Path to the desktop version of the header background image.
 * @param {string} props.tabletImg - Path to the tablet version of the header background image.
 * @param {string} props.mobileImg - Path to the mobile version of the header background image.
 * @returns {JSX.Element} The section header component.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({ section, header, text, desktopImg, tabletImg, mobileImg }) => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');
    
    useEffect(() => {
        updateBackgroundImage();
        window.addEventListener('resize', updateBackgroundImage);
        return () => {
            window.removeEventListener('resize', updateBackgroundImage);
        };
    }, [desktopImg, tabletImg, mobileImg]);

    /**
     * Updates the background image based on the current window size.
     * Determines the screen size category (desktop, tablet, or mobile)
     * and sets the appropriate image URL.
     */
    const updateBackgroundImage = () => {
        const isDesktop = window.innerWidth >= 1024;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        setBackgroundImage(isDesktop ? desktopImg : isTablet ? tabletImg : mobileImg);
    };

    return (
        <header className="sectionHeader" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='headerContent'>
                <h1>{section}</h1>
                <div className='decoLine'></div>
                <h3>{header}</h3>
                <p className='defaultText'>{text}</p>
            </div>
        </header>
    )
}
export default SectionHeader;