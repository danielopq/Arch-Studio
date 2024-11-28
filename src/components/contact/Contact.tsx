import './contact.css';
import { ContactHeader, ContactDetails, ContactMap, ContactForm } from './components';
import { useEffect } from 'react';

interface ContactProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};

const Contact: React.FC<ContactProps> = ({setCurrentSection}) => {

    useEffect(() => {
        setCurrentSection('contact');
    }, [])

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