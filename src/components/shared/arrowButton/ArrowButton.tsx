import './arrowButton.css';

interface ArrowButtonProps{
    text?:string;
    handleClick?:()=>void;
} 

const ArrowButton: React.FC<ArrowButtonProps> = ({text='',handleClick}) => {
    return (
        <button className='arrowButton' onClick={handleClick}>{text}</button>
    )
}
export default ArrowButton;