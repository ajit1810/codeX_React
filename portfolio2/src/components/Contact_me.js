import './Contact.css';

function Contact_me() {
    return (
        <div className="contact" id='contact'>
             <h2>Contact Me</h2>
             <p>Cultivating Connections: Reach Out And Connect With Me</p>


            <form>
            <div className='form-div'>
                    <div>

                      <div className='form-group'>
                            <input type='text' name='name' placeholder='Your Name'/>
                        </div>
                        <div className='form-group'>
                            <input type='email' name='email' placeholder='Your Email'/>
                        </div>
                        <div className='form-group'>
                            <input type='number' name='number' placeholder='Phone number'/>
                        </div>

                    </div>
                        

                    <div>


                        <div className='form-group'>
                            <input type='text' name='text' placeholder='Services of interest'/>
                        </div>
                        <div className='form-group'>
                            <textarea name='message' placeholder='Project Details'></textarea>
                        </div>

                    </div>

            </div>
                        <button  type='submit' id='send-btn'>Send Message</button>
                    </form>


        </div>
    );
}

export default Contact_me;