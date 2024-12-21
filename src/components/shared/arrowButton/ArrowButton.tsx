import './arrowButton.css';

interface ArrowButtonProps{
    text?:string;
    handleClick?:()=>void;
} 

/**
 * Renders the button most present in the website.
 * 
 * @param param0 
 * @param {string} param0.text - Text displayed on the button.
 * @param {function} param0.handleClick - Action given to the button.
 * @returns {JSX} - ArrowButton component.
 */
const ArrowButton: React.FC<ArrowButtonProps> = ({text='',handleClick}) => {
    return (
        <div className='arrowButton' onClick={handleClick}>{text}</div>
    )
}
export default ArrowButton;