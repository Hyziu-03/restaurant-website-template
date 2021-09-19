import { BrowserRouter as Router, Link } from 'react-router-dom';

import Envelope from '../../img/envelope.jpg';

const Contact = () => {
    let message = '';
    let readTextarea = () => message = document.getElementById('textarea').value;

    return (
        <Router>
            <section className='contact-form'>
                <Link to='/home'><i className='fas fa-times'></i></Link>
                <section className='input-fields'>
                    <label htmlFor='name' className='label'>
                        Your name is: &emsp; <input type='text' className='input' name='name' placeholder='Yuval Noah'/>
                    </label>
                    <label htmlFor='email' className='label'>
                        Your email is: &emsp; <input type='email' className='input' name='email' placeholder='harari@gmail.com'/>
                    </label>
                    <textarea className='textarea input' id='textarea' placeholder='What is on your mind?' onChange={readTextarea}/>
                    <button className='send-feedback' onClick={() => console.log('You sent ' + message + '')}>Send!</button>
                </section>
                <img src={Envelope} alt='' className='roses-envelope' />
            </section>
        </Router>
    )
}

export default Contact;
