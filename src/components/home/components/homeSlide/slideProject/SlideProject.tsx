import './slideProject.css';
import { useEffect, useState } from 'react';

interface SlideProjectProps{
    zIndex:string;
    opacity:string;
    title:string;
    mainText:string;
    desktopImg: string;
    tabletImg: string;
    mobileImg: string;
}

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