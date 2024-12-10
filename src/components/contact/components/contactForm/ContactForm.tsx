import { useRef } from 'react';
import './contactForm.css';
import SendButton from './sendButton/SendButton';

const ContactForm: React.FC = () => {

    const refName = useRef<HTMLInputElement>(null);
    const refNameError = useRef<HTMLParagraphElement>(null);
    const refEmail = useRef<HTMLInputElement>(null);
    const refEmailError = useRef<HTMLParagraphElement>(null);
    const refMessage = useRef<HTMLTextAreaElement>(null);
    const refMessageError = useRef<HTMLParagraphElement>(null);

    const isEmpty = (text:string):boolean => {
        return (text.trim() === '');
    }

    function isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const submitForm = (event: React.FormEvent): void => {
        event.preventDefault();
        if (refName.current && refNameError.current) {
            isEmpty(refName.current.value) ? refNameError.current.innerText = 'Can’t be empty' : refNameError.current.innerText = '';
        }
        if (refEmail.current && refEmailError.current) {
            isEmpty(refEmail.current.value) ? refEmailError.current.innerText = 'Can’t be empty' 
            : isValidEmail(refEmail.current.value) ? refEmailError.current.innerText = '' : refEmailError.current.innerText = 'Invalid format';
        }
        if (refMessage.current && refMessageError.current) {
            isEmpty(refMessage.current.value) ? refMessageError.current.innerText = 'Can’t be empty' : refMessageError.current.innerText = '';
        }
    }

    return (
        <section id="connectWithUs">
            <h3>Connect with us</h3>
            <div id="connectWithUs-content">
                <form id="contactForm" onSubmit={submitForm}>
                    <div>
                        <input ref={refName} type='text' placeholder='Name'></input>
                        <p ref={refNameError}></p>
                    </div>
                    <div>
                        <input ref={refEmail} type='text' placeholder='Email'></input>
                        <p ref={refEmailError}></p>
                    </div>
                    <div>
                        <textarea ref={refMessage} placeholder='Message'></textarea>
                        <p ref={refMessageError}></p>
                    </div>
                    <SendButton />
                </form>
            </div>
        </section>
    )
}
export default ContactForm;