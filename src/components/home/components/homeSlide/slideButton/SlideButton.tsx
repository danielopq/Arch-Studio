import './slideButton.css';

interface SlideButtonProps{
    text:string;
    disabled:boolean;
    displayProject:()=>void;
}

const SlideButton:React.FC<SlideButtonProps> = ({text,disabled,displayProject})=>{
    return(
        <button className='slideButton' disabled={disabled} onClick={displayProject}>{text}</button>
    )
}
export default SlideButton;