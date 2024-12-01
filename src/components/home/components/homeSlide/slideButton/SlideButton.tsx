import './slideButton.css';

interface SlideButtonProps{
    text:string;
    disabled:boolean;
}

const SlideButton:React.FC<SlideButtonProps> = ({text,disabled})=>{
    return(
        <button className='slideButton' disabled={disabled}>{text}</button>
    )
}
export default SlideButton;