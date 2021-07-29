import ReactDOMServer from 'react-dom/server';
import ModalBox from "./ModalBox";

const showModalBox = () => {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = ReactDOMServer.renderToString(<ModalBox />);
}

const Footer = () => {
    return (
        <footer className='footer'>
            <button className="contact-us" tabIndex="0" onClick={showModalBox}>Contact Us</button>
            <p className="copyright">
                This website template has been designed and developed by <strong>Szymon Hyziak</strong>.
                Find me on LinkedIn using the link <a href="https://www.linkedin.com/in/szymon-hyziak/" className='link' target="_blank" rel="noreferrer">here</a>. Thank you!
                Icons made by <a href="https://www.freepik.com" target="_blank" rel="noreferrer" className="link">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer" className="link">www.flaticon.com</a>.
            </p>
            <article id="placeholder"></article>
        </footer>
    )
}

export default Footer;
