import './sectionName.css';

interface SectionNameProps{
    title:string;
} 

/**
 * Renders a div located at the top-left corner that displays the name of the current website section.
 * @param {SectionNameProps} props - The properties passed to the component.
 * @param {string} props.title - The name of the current website section.
 * @returns {JSX.Element} The rendered SectionName component.
 */
const SectionName:React.FC<SectionNameProps> = ({title}) => {
    return (
        <div id='sectionName'>
            <div></div>
            <p>{title.toUpperCase()}</p>
        </div>
    )
}
export default SectionName; 