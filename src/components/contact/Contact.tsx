import './contact.css';
import SectionHeader from '../shared/sectionHeader/SectionHeader';
import { ContactDetails, ContactMap, ContactForm } from './components';
import { useEffect } from 'react';

interface ContactProps {
    setCurrentSection: (section: 'home' | 'portfolio' | 'about us' | 'contact') => void;
};

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
                desktopImg='./public/img/contact/ContactHeadPic-desktop.jpg'
                tabletImg='./public/img/contact/ContactHeadPic-tablet.jpg'
                mobileImg='./public/img/contact/ContactHeadPic-mobile.jpg'
            />
            <ContactDetails />
            <ContactMap />
            <ContactForm />
        </main>
    )
}
export default Contact;