import { useRef, useState } from 'react';
import './contactForm.css';
import SendButton from './sendButton/SendButton';
import ArrowButton from '../../../shared/arrowButton/ArrowButton';
import {isEmpty,isValidEmail} from './utils/validateForm'

interface Errors{
    nameError:string;
    emailError:string;
    messageError:string;
}

const ContactForm: React.FC = () => {

    const [errors,setErrors] = useState<Errors>({
        nameError:'',
        emailError:'',
        messageError:'',
    })

    const {nameError,emailError,messageError} = errors;

    const refConfirmation = useRef<HTMLDivElement>(null);
    const refName = useRef<HTMLInputElement>(null);
    const refEmail = useRef<HTMLInputElement>(null);
    const refMessage = useRef<HTMLTextAreaElement>(null);

    const submitForm = (event: React.FormEvent): void => {
        event.preventDefault();

        let newError:Errors = {
            nameError:'',
            emailError:'',
            messageError:'',
        }

        if (refName.current) {
            isEmpty(refName.current.value) ? newError.nameError = 'Can’t be empty' : newError.nameError = '';
        }
        if (refEmail.current) {
            isEmpty(refEmail.current.value) ? newError.emailError = 'Can’t be empty' 
            : isValidEmail(refEmail.current.value) ? newError.emailError = '' : newError.emailError = 'Invalid format';
        }
        if (refMessage.current) {
            isEmpty(refMessage.current.value) ? newError.messageError = 'Can’t be empty' : newError.messageError = '';
        }

        if (newError.nameError === '' && newError.emailError === '' && newError.messageError === '' && refConfirmation.current) {
            refConfirmation.current.style.display = 'inline-flex';
        }

        setErrors(newError);  
    }

    return (
        <section id="connectWithUs">
            <div id="confirmation" ref={refConfirmation}>
                <div>
                    <p>Your message has been sent. We will contact you soon.</p>
                    <ArrowButton text='Accept'/>
                </div>
            </div>
            <h3>Connect with us</h3>
            <div id="connectWithUs-content">
                <form id="contactForm" onSubmit={submitForm}>
                    <div className={nameError === '' ? '' : 'error'}>
                        <input ref={refName} type='text' placeholder='Name'></input>
                        <p>{nameError}</p>
                    </div>
                    <div className={emailError === '' ? '' : 'error'}>
                        <input ref={refEmail} type='text' placeholder='Email'></input>
                        <p>{emailError}</p>
                    </div>
                    <div className={messageError === '' ? '' : 'error'}>
                        <textarea ref={refMessage} placeholder='Message'></textarea>
                        <p>{messageError}</p>
                    </div>
                    <SendButton />
                </form>
            </div>
        </section>
    )
}
export default ContactForm;