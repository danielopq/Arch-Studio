import './contact.css';
import SectionHeader from '../shared/sectionHeader/SectionHeader';
import { ContactDetails, ContactForm } from './components';
import { useEffect } from 'react';

interface ContactProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void; // Function to set the current section of the website
};

/**
 * The "Contact" section of the website.
 * 
 * This section provides details for contacting the company, including office addresses, a map of office locations, and a contact form for inquiries.
 * 
 * @param {ContactProps} props - The props for the Contact component.
 * @param {ContactProps} props.setCurrentSection - Function to set the current section of the website.
 * @returns {JSX.Element} The rendered Contact component.
 */
const Contact: React.FC<ContactProps> = ({ setCurrentSection }) => {
    const headerText: string = 'We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!';
    useEffect(() => {
        setCurrentSection('contact');
    }, [])

    return (
        <main id="contact">
            <SectionHeader
                section='Contact'
                header='Tell us about your project'
                text={headerText}
                desktopImg='/img/contact/ContactHeadPic-desktop.jpg'
                tabletImg='/img/contact/ContactHeadPic-tablet.jpg'
                mobileImg='/img/contact/ContactHeadPic-mobile.jpg'
            />
            <ContactDetails />
            <ContactForm />
        </main>
    )
}
export default Contact;