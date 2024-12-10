import './contactDetails.css';
import ViewOnMapBt from './viewOnMapBt/ViewOnMapBt';

/**
 * ContactDetails component displays the company's office information, including email, address, and phone number.
 * It also includes buttons to view the locations of the offices on a map.
 * 
 * @returns {JSX.Element} The ContactDetails component displaying the office details and view on map buttons.
 */
const ContactDetails: React.FC = () => {
    return (
        <section id="contactDetails">
            <h3>Contact Details</h3>
            <div>
                <h4>Main office</h4>
                <div className='contactDetailsInfo'>
                    <p className='defaultText'>Mail : archone@mail.com</p>
                    <p className='defaultText'>Address : 1892  Chenoweth Drive TN</p>
                    <p className='defaultText'>Phone : 123-456-3451</p>
                </div>
                <ViewOnMapBt />
            </div>
            <div>
                <h4>Office II</h4>
                <div className='contactDetailsInfo'>
                    <p className='defaultText'>Mail : archtwo@mail.com</p>
                    <p className='defaultText'>Address : 3399  Wines Lane TX</p>
                    <p className='defaultText'>Phone : 832-123-4321</p>
                </div>
                <ViewOnMapBt />
            </div>
        </section>
    )
}
export default ContactDetails;