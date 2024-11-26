import './arrowButton.css';

interface ArrowButtonProps{
    text?:string;
} 

const ArrowButton: React.FC<ArrowButtonProps> = ({text=''}) => {
    return (
        <button className='arrowButton'>{text}</button>
    )
}
export default ArrowButton;