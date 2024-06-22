import { useState } from 'react';
import './contactform.css';

function ContactForm() {

    const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);


    return (
        <form id='contact-form'>
            <input type='text' placeholder='First Name' className='half'></input>
            <input type='text' placeholder='Last Name' className='half'></input><br></br>
            <input type='text' placeholder='Company' className='full'></input><br></br>
            <input type='text' placeholder='Email' className='full'></input><br></br>
            <input type='text' placeholder='Phone Number'className='half'></input>
            <select className='half'>
                <option>How did you hear about us?</option>
                <option>Google</option>
                <option>Referred by other client</option>
            </select><br></br>
            <input type='checkbox' id='has-site-chbx' onChange={(e) => setCheckboxIsChecked(e.target.checked)}></input>
            <label>I currently have a website</label><br></br>
            {
                checkboxIsChecked ? <><input type='text' placeholder='Website Address' className='full'></input><br></br></> : <></>
            }
            <textarea placeholder='Tell us more about your inquiry/request' className='full'></textarea><br></br>
            <button className='full' onClick={() => alert('form submitted!')}>Submit</button>
        </form>
    )
}

export default ContactForm;