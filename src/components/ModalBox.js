import RosesEnvelope from '../img/roses-envelope.jpg';

const ModalBox = () => {
    return (
        <div className="modal-box">
            <section className="form">
                <form className="input-fields">
                    <label htmlFor="name" className="label">
                        Your name is: <input type="text" name="name" id="name" className="name-input" autoComplete="name" required/>
                    </label>
                    <label htmlFor="email" className="label">
                        Your email adress is: <input type="email" name="email" id="email" className="email-input" autoComplete="email" required/>
                    </label>
                    <label htmlFor="thoughts" className="label">
                        Your thoughts go here: <textarea name="thoughts" id="thoughts" className="thoughts-container"></textarea>
                    </label> 
                </form>
                <img src={RosesEnvelope} alt="" className="roses-envelope" />
            </section>
            <button className="send-feedback" type="submit">
                Send Your Feedback!
            </button>
        </div>
    )
}

export default ModalBox;
