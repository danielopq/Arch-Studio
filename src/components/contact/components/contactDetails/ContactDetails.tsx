import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import './contactDetails.css';
import L from 'leaflet';
import ViewOnMapBt from './viewOnMapBt/ViewOnMapBt';

/**
 * ContactDetails component displays the company's office information, including email, address, and phone number.
 * It also includes buttons to view the locations of the offices on a map.
 * 
 * @returns {JSX.Element} The ContactDetails component displaying the office details and view on map buttons.
 */
const ContactDetails: React.FC = () => {
    const mapRef = useRef<L.Map | null>(null);
    const markers = useRef<L.Marker[]>([]);

    useEffect(() => {
        const map = L.map('contactMap').setView([40.4168, -3.7038], 13); //nitializing the map

        // Adding the tile layer.
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        mapRef.current = map; // saving the map.

        return () => {
            map.remove();
        };
    }, []);

    const spotLocation = (lat: number, lng: number) => {
        const map = mapRef.current;
        //removing markers.
        markers.current.forEach(marker => marker.remove());
        markers.current = [];
        if (map) {
            const marker = L.marker([lat, lng]).addTo(mapRef.current!); //creates and add new marker
            map.setView(marker.getLatLng(), 15);//center the map on the maker
            markers.current.push(marker);//add the marker on the array marker
        }
    };

    return (
        <section id="contactDetails">
            <div id="officeDetails">
                <h3>Contact Details</h3>
                <div>
                    <h4>Main office</h4>
                    <div className="contactDetailsInfo">
                        <p className="defaultText">Mail : archone@mail.com</p>
                        <p className="defaultText">Address : 1892 Chenoweth Drive TN</p>
                        <p className="defaultText">Phone : 123-456-3451</p>
                    </div>
                    <ViewOnMapBt handleclick={() => spotLocation(40.4168, -3.7038)} />
                </div>
                <div>
                    <h4>Office II</h4>
                    <div className="contactDetailsInfo">
                        <p className="defaultText">Mail : archtwo@mail.com</p>
                        <p className="defaultText">Address : 3399 Wines Lane TX</p>
                        <p className="defaultText">Phone : 832-123-4321</p>
                    </div>
                    <ViewOnMapBt handleclick={() => spotLocation(40.7128, -74.006)} />
                </div>
            </div>
            <div id="contactMap"></div>
        </section>
    );
};

export default ContactDetails;
