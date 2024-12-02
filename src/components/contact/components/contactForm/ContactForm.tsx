import './contactForm.css';
import SendButton from './sendButton/SendButton';
const ContactForm: React.FC = () => {
    return (
        <section id="contactForm">
            <h3>Connect with us</h3>
            <div id="contactForm-content">
                <form>
                    <div>
                        <input type='text' placeholder='Name'></input>
                        <p className='errorMessage'>Can’t be empty</p>
                    </div>
                    <div>
                        <input type='email' placeholder='Email'></input>
                        <p className='errorMessage'>Can’t be empty</p>
                    </div>
                    <div>
                        <input type='text' placeholder='Message'></input>
                        <p className='errorMessage'>Can’t be empty</p>
                        <SendButton/>
                    </div>

                </form>
            </div>
        </section>
    )
}
export default ContactForm;