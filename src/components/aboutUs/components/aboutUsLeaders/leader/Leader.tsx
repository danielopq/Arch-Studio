import './leader.css';

interface LeaderProps{
    name:string;
    position:string;
    backgroundImage:string;
    gridArea:string;
}

const Leader: React.FC<LeaderProps> = ({name, position,backgroundImage,gridArea}) => {
    return (
        <div className='leader' style={{ backgroundImage: `url(${backgroundImage})`,gridArea: gridArea}}>
            <h5>{name}</h5>
            <p className='defaultText'>{position}</p>
        </div>
    )
}
export default Leader;