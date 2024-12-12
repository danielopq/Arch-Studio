import './viewOnMapBt.css';

interface ViewOnMapBt{
    handleclick:()=>void;
}

/**
 * A button component that triggers the action to view the location on the map.
 * 
 * @returns {JSX.Element} The button element that allows users to view the location on the map.
 */
const ViewOnMapBt: React.FC<ViewOnMapBt> = ({handleclick}) => {
    return (
        <button className='viewOnMapBt' onClick={handleclick}>View on Map</button>
    )
}
export default ViewOnMapBt;