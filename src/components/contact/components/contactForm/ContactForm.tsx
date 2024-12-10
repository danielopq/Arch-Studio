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


/**
 * ContactForm component that contains a contact application form where users can submit their information.
 * The form includes validation and displays a confirmation message upon successful submission.
 * 
 * @returns {JSX.Element} The ContactForm component with form fields, error handling, and confirmation message.
 */
const ContactForm: React.FC = () => {

    const [errors,setErrors] = useState<Errors>({
        nameError:'',
        emailError:'',
        messageError:'',
    })

    const {nameError,emailError,messageError} = errors;

    const refConfirmation = useRef<HTMLDivElement>(null);
    const refForm = useRef<HTMLFormElement>(null);
    const refName = useRef<HTMLInputElement>(null);
    const refEmail = useRef<HTMLInputElement>(null);
    const refMessage = useRef<HTMLTextAreaElement>(null);


    /**
     * Closes the confirmation message when the user clicks the accept button.
     */
    const closeConfirmation = () => {
        if (refConfirmation.current) refConfirmation.current.style.display = 'none';
    }

 
    /**
     * Validates the form fields, displays a confirmation message on success, and resets the form.
     * 
     * @param {React.FormEvent} event - The event triggered by the form submission.
     */
    const submitForm = (event: React.FormEvent): void => {
        event.preventDefault();

        let newError:Errors = {
            nameError:'',
            emailError:'',
            messageError:'',
        }

        if( refForm.current && refName.current && refEmail.current && refMessage.current && refConfirmation.current){
            isEmpty(refName.current.value) ? newError.nameError = 'Can’t be empty' : newError.nameError = '';
            isEmpty(refEmail.current.value) ? newError.emailError = 'Can’t be empty' : isValidEmail(refEmail.current.value) ? newError.emailError = '' : newError.emailError = 'Invalid format';
            isEmpty(refMessage.current.value) ? newError.messageError = 'Can’t be empty' : newError.messageError = '';

            if (newError.nameError === '' && newError.emailError === '' && newError.messageError === '') {
                refConfirmation.current.style.display = 'inline-flex';
                refForm.current.reset();
            }
        }

        setErrors(newError);  
    }

    return (
        <section id="connectWithUs">
            <div id="confirmation" ref={refConfirmation}>
                <div>
                    <p>Your message has been sent. We will contact you soon.</p>
                    <ArrowButton text='Accept' handleClick={closeConfirmation}/>
                </div>
            </div>
            <h3>Connect with us</h3>
            <div id="connectWithUs-content">
                <form id="contactForm" ref={refForm} onSubmit={submitForm}>
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