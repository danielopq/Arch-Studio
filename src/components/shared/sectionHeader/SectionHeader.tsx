import './sectionHeader.css';

const SectionHeader: React.FC = () => {
    return (
        <header className="sectionHeader" style={{ backgroundImage: 'url(./img/about/AboutHeadPic-desktop.jpg)' }}>
            <div className='headerContent'>
            <h1>About</h1>
                <div></div>
                <h3>Your team of professionals</h3>
                <p className='defaultText'>
                    Our small team of world-class professionals will work with you every step of the way.
                    Strong relationships are at the core of everything we do. This extends to the
                    relationship our projects have with their surroundings.
                </p>
            </div>
        </header>
    )
}
export default SectionHeader;