import Envelope from '../../img/envelope.jpg';

const Contact = () => {
    let message = '';
    let readTextarea = () => message = document.getElementById('textarea').value;

    return (
        <section className="contact-form">
            <i className="fas fa-times" tabIndex='0'></i>
            <section className="input-fields">
                <label htmlFor="name" className="label">
                    Your name is: &emsp; <input type="text" className="input" name="name" placeholder="Yuval Noah"/>
                </label>
                <label htmlFor="email" className="label">
                    Your email is: &emsp; <input type="email" className="input" name="email" placeholder="harari@gmail.com"/>
                </label>
                <textarea className="textarea input" id="textarea" placeholder="What is on your mind?" onChange={readTextarea}/>
                <button className="send-feedback">Send!</button>
            </section>
            <img src={Envelope} alt="" className="roses-envelope" />
        </section>
    )
}

export default Contact;
