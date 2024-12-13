import './slideProject.css';
import { useEffect, useState } from 'react';

interface SlideProjectProps {
    zIndex: string; // CSS z-index value to control stacking order of slides
    opacity: string; // CSS opacity value to control visibility of the slide
    title: string; // Title of the project displayed in the slide
    mainText: string; // Brief description of the project
    desktopImg: string; // URL for the desktop version of the image
    tabletImg: string; // URL for the tablet version of the image
    mobileImg: string; // URL for the mobile version of the image
}

/**
 * SlideProject Component
 * 
 * Represents a single project displayed in the slideshow. It adjusts the background image
 * dynamically based on the device's screen width and shows the project's title and description.
 * 
 * @param {SlideProjectProps} props - The properties of the component.
 * @param {string} props.zIndex - Determines the stacking order of the slide.
 * @param {string} props.opacity - Controls the visibility of the slide.
 * @param {string} props.title - The title of the project.
 * @param {string} props.mainText - A brief description of the project.
 * @param {string} props.desktopImg - Image URL for desktop devices.
 * @param {string} props.tabletImg - Image URL for tablet devices.
 * @param {string} props.mobileImg - Image URL for mobile devices.
 * 
 * @returns {JSX.Element} The rendered SlideProject component.
 */
const SlideProject: React.FC<SlideProjectProps> = ({zIndex,opacity,title,mainText,desktopImg,tabletImg,mobileImg}) => {
    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        setBackgroundImage(isDesktop ? desktopImg : isTablet ? tabletImg : mobileImg);
    }, [])

    const isDesktop: boolean = window.innerWidth > 1440;
    const isTablet: boolean = window.innerWidth >= 768 && window.innerWidth < 1440;

    return (
        <div className='slideProject' style={{ backgroundImage: `url(${backgroundImage})`,opacity:opacity,zIndex:zIndex }}>
            <div className='slideProjectBg'>
                <div>
                    <h2>{title}</h2>
                    <p className='defaultText'>{mainText}</p>
                </div>
            </div>
        </div>
    )
}
export default SlideProject;