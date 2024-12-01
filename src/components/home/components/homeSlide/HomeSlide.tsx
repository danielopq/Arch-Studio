import './homeSlide.css';

import SlideButton from './slideButton/SlideButton';

const HomeSlide:React.FC = () =>{
    return(
        <section id="homeSlide">
            <div></div>
            <nav id="homeSlideNavBar">
                <SlideButton text='01' disabled={true}/>
                <SlideButton text='02' disabled={false}/>
                <SlideButton text='03' disabled={false}/>
                <SlideButton text='04' disabled={false}/>
            </nav>
        </section>
    )
}
export default HomeSlide;