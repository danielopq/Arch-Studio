import './contact.css';
import { ContactHeader, ContactDetails, ContactMap, ContactForm } from './components';

const Contact: React.FC = () => {
    return (
        <main id="contact">
            <ContactHeader />
            <ContactDetails />
            <ContactMap />
            <ContactForm />
        </main>
    )
}
export default Contact;