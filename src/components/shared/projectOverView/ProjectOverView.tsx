import { useEffect, useState } from 'react';
import './projectOverView.css';

interface projectOverViewProps {
    number?: string;
    title: string;
    desktopImg: string;
    tabletImg: string;
    mobileImg: string;
    gridArea?:string;
}

const ProjectOverView: React.FC<projectOverViewProps> = ({ number='', title, desktopImg,tabletImg,mobileImg,gridArea=''}) => {

    const [backgroundImage,setBackgroundImage] = useState<string>('');

    useEffect(()=>{
        setBackgroundImage(isDesktop ? desktopImg : isTablet ? tabletImg : mobileImg);
    },[])

    const isDesktop:boolean = window.innerWidth > 1440;
    const isTablet:boolean = window.innerWidth >= 768 && window.innerWidth < 1440;
    
    return (
        <div className='projectOverView' style={{ backgroundImage: backgroundImage, gridArea: gridArea }}>
            <div>
                <div className='projectOverViewNumber'>{number}</div>
                <div className='projectOverViewInfo'>
                    <p className='projectOverViewTitle'>{title}</p>
                    <p className='defaultText'>View All Projects</p>
                </div>
            </div>
        </div>
    )
}
export default ProjectOverView;