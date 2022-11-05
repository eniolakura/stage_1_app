import React from "react";
import Footer from "./Footer";

const contact = () => {
    return(

        <form>
        <div className='form__field'>
            <div className='form__name'>
                <div className='firstname'>
                    <label for="first_name">First name</label>
                    <input type="text" id="first_name" name="first_name" placeholder='Enter your first name' />
                </div>
                <div className='lastname'>
                    <label for="last_name">Last name</label>
                    <input type="text" id="last_name" name="last_name" placeholder='Enter your last name'/>
                </div>
            </div>
            <div className='email'>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required placeholder='yourname@email.com' />
            </div>
            <div className='message'>
                <label for="message">Message</label>
                <textarea type="text" id="message" name="message" required placeholder="Send me a message and I'll reply you as soon as possible..." />
            </div>
            <div className='form__checkbox'>
                <input type="checkbox" id="check" name="check" value="check" onClick={enableButton} />
                <label for="agree"></label>
            </div>
        </div>
        <button type='submit' disabled="true" id='btn__submit'>Send message</button>
    </form>  
    )
}