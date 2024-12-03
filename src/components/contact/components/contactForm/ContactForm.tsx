import './contactForm.css';
import SendButton from './sendButton/SendButton';
const ContactForm: React.FC = () => {
    return (
        <section id="connectWithUs">
            <h3>Connect with us</h3>
            <div id="connectWithUs-content">
                <form id="contactForm">
                    <div>
                        <input type='text' placeholder='Name'></input>
                        <p>Can’t be empty</p>
                    </div>
                    <div>
                        <input type='email' placeholder='Email'></input>
                        <p>Can’t be empty</p>
                    </div>
                    <div>
                        <textarea placeholder='Message'></textarea>
                        <p>Can’t be empty</p>
                    </div>
                    <SendButton/>
                </form>
            </div>
        </section>
    )
}
export default ContactForm;