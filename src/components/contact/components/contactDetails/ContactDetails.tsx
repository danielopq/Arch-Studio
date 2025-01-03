import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import './contactDetails.css';
import L from 'leaflet';
import ViewOnMapBt from './viewOnMapBt/ViewOnMapBt';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const ContactDetails: React.FC = () => {
    const mapRef = useRef<L.Map | null>(null); // Reference to the map instance
    const markers = useRef<L.Marker[]>([]);   // Reference to store the markers on the map

    // Define the custom icon for the markers
    const customIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    useEffect(() => {
        // Initialize the map centered on specific coordinates
        const map = L.map('contactMap').setView([41.41101, 2.21850], 6);

        // Add the OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        mapRef.current = map; // Save the reference to the map

        // Create a marker at the initial location and add it to the map
        const marker = L.marker([41.41101, 2.21850], { icon: customIcon }).addTo(mapRef.current!);
        map.setView(marker.getLatLng(), 16); // Center the map on the marker
        markers.current.push(marker); // Add the marker to the markers array

        return () => {
            map.remove(); // Clean up the map when the component unmounts
        };
    }, [customIcon]);

    // Spots a location on the map by placing a marker at the specified coordinates
    const spotLocation = (lat: number, lng: number) => {
        const map = mapRef.current;
        markers.current.forEach(marker => marker.remove()); // Remove all existing markers
        markers.current = [];
        if (map) {
            // Create a new marker and add it to the map
            const marker = L.marker([lat, lng], { icon: customIcon }).addTo(mapRef.current!);
            map.setView(marker.getLatLng(), 16); // Center the map on the new marker
            markers.current.push(marker); // Add the marker to the markers array
        }
    };

    return (
        <section id="contactDetails">
            <div className='decoLine'></div>
            <div id="officeDetails">
                <h3>Contact Details</h3>
                <div className="contactDetailsInfo">
                    <div>
                        <h4>Main office</h4>
                        <p className="defaultText">Mail : archone@mail.com</p>
                        <p className="defaultText">Address : Av. Diagonal 1, Barcelona</p>
                        <p className="defaultText">Phone : 123-456-3451</p>
                    </div>
                    <ViewOnMapBt handleclick={() => spotLocation(41.41101, 2.21850)} />
                </div>
                <div className="contactDetailsInfo">
                    <div>
                        <h4>Office II</h4>
                        <p className="defaultText">Mail : archtwo@mail.com</p>
                        <p className="defaultText">Address : Plaza de Callao 6, Madrid</p>
                        <p className="defaultText">Phone : 832-123-4321</p>
                    </div>
                    <ViewOnMapBt handleclick={() => spotLocation(40.420066, -3.705923)} />
                </div>
            </div>
            <div id="contactMap"></div>
        </section>
    );
};

export default ContactDetails;

