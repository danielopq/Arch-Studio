import './leader.css';

interface LeaderProps{
    name:string;
    position:string;
    backgroundImage:string;
    gridArea:string;
}

/**
 * Leader component displaying information about a company leader.
 * 
 * @param {LeaderProps} param0 - The properties for the leader component.
 * @param {string} param0.name - Name of the leader.
 * @param {string} param0.position - Position of the leader within the company.
 * @param {string} param0.backgroundImage - Path to the leader's background image (picture).
 * @param {string} param0.gridArea - CSS grid area name for positioning.
 * 
 * @returns {JSX.Element} The Leader component displaying the leader's name, position, and background image.
 */
const Leader: React.FC<LeaderProps> = ({name, position,backgroundImage,gridArea}) => {
    return (
        <div className='leader' style={{ backgroundImage: `url(${backgroundImage})`,gridArea: gridArea}}>
            <h5>{name}</h5>
            <p className='defaultText'>{position}</p>
        </div>
    )
}
export default Leader;