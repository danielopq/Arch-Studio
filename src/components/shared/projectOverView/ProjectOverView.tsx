import { useEffect, useState } from 'react';
import './projectOverView.css';

interface projectOverViewProps {
    number?: string;
    title: string;
    info: string;
    desktopImg: string;
    tabletImg: string;
    mobileImg: string;
    gridArea?: string;
}

/**
 * Displays an overview of a project, including a responsive image, title, and brief description.
 * 
 * This component dynamically adjusts the displayed background image based on the device's screen size.
 * 
 * @param {ProjectOverViewProps} param0 - The props for the ProjectOverView component.
 * @param {string} [param0.number=''] - Optional. A number representing the project order.
 * @param {string} param0.title - The title of the project.
 * @param {string} param0.info - A brief description or information about the project.
 * @param {string} param0.desktopImg - The URL of the desktop version of the project image.
 * @param {string} param0.tabletImg - The URL of the tablet version of the project image.
 * @param {string} param0.mobileImg - The URL of the mobile version of the project image.
 * @param {string} [param0.gridArea=''] - Optional. Specifies the CSS grid area for the component layout.
 * @returns {JSX.Element} - The ProjectOverView component displaying the project details and responsive background image.
 */
const ProjectOverView: React.FC<projectOverViewProps> = ({ number = '', title, info, desktopImg, tabletImg, mobileImg, gridArea = '' }) => {

    const [backgroundImage, setBackgroundImage] = useState<string>('');

    useEffect(() => {
        setBackgroundImage(isDesktop ? desktopImg : isTablet ? tabletImg : mobileImg);
    }, [])

    const isDesktop: boolean = window.innerWidth > 1440;
    const isTablet: boolean = window.innerWidth >= 768 && window.innerWidth < 1440;

    return (
        <div className='projectOverView' style={{ backgroundImage: `url(${backgroundImage})`, gridArea: gridArea }}>
            <div>
                <div className='projectOverViewNumber'>{number}</div>
                <div className='projectOverViewInfo'>
                    <p className='projectOverViewTitle'>{title}</p>
                    <p className='defaultText'>{info}</p>
                </div>
            </div>
        </div>
    )
}
export default ProjectOverView;