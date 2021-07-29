import RosesEnvelope from '../roses-envelope.jpg';

const ModalBox = () => {
    return (
        <div className="layout-wrapper">
            <section className="modal-box">
                <fieldset className="input-fields">
                    <label htmlFor="name" className="label">
                        Your name is: <input type="text" name="" id="name" className="name-input" />
                    </label>
                    <label htmlFor="email" className="label">
                        Your email adress is: <input type="email" name="" id="email" className="email-input" />
                    </label>
                    <label htmlFor="thoughts" className="label">
                        Your thoughts go here: <textarea name="" id="thoughts" cols="30" rows="10" className="thoughts-container"></textarea>
                    </label>

                    <button className="send-feedback">
                        Send Your Feedback!
                    </button>
                </fieldset>
            </section>
            <img src={RosesEnvelope} alt="" className="roses-envelope" />
        </div>
    )
}

export default ModalBox;
