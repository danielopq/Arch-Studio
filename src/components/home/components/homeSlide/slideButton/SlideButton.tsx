import './slideButton.css';

interface SlideButtonProps{
    text:string;
    disabled:boolean;
    displayProject:()=>void;
}

/**
 * SlideButton Component
 * 
 * Represents a button used in the slideshow navigation bar. 
 * It displays a label and triggers a function to navigate to a specific slide.
 * 
 * @param {SlideButtonProps} props - The properties of the component.
 * @param {string} props.text - The text displayed on the button.
 * @param {boolean} props.disabled - If true, the button is disabled.
 * @param {function} props.displayProject - Function called when the button is clicked.
 * 
 * @returns {JSX.Element} The rendered SlideButton component.
 */
const SlideButton:React.FC<SlideButtonProps> = ({text,disabled,displayProject})=>{
    return(
        <button className='slideButton' disabled={disabled} onClick={displayProject}>{text}</button>
    )
}
export default SlideButton;