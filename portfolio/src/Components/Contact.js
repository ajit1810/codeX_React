import { PiPhone } from 'react-icons/pi';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { FaLocationCrosshairs,  } from 'react-icons/fa6';


function Contact() {
    return(
        <div className='contact'>
            <h1>Contact Us</h1>
            <div className='contact-wrapper'>
                <div className='contact-form'>
                    <h3>Send us a message</h3>
                    <form>
                        <div className='form-group'>
                            <input type='text' name='name' placeholder='Your Name'/>
                        </div>
                        <div className='form-group'>
                            <input type='email' name='email' placeholder='Your Email'/>
                        </div>
                        <div className='form-group'>
                            <textarea name='message' placeholder='Your Message'></textarea>
                        </div>
                        <button type='submit' id='send-message'>Send Message</button>
                    </form>
                </div>
                <div className='contact-info'>
                    <h3>Contact Information</h3>
                    <p><i><PiPhone/></i> +91 7420928727</p>
                    <p><i><MdEmail/></i> ajit@10@gmail.com</p>
                    <p><i><FaLocationCrosshairs/></i> 123 Shriram colany,satara</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;