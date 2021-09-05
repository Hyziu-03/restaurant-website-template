import { Link } from "react-router-dom";

const hideModal = () => {
    document.getElementById('placeholder').style.display = 'none';
    document.getElementById('container').style.filter = '';
    document.getElementById('container').style.pointerEvents = 'auto';
}

const showModal = () => {
    document.getElementById('placeholder').style.display = 'block';
    document.getElementById('container').style.filter = 'blur(8px)';
    document.getElementById('container').style.pointerEvents = 'none';
}

const detectClick = () => {
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementsByClassName('fa-times')[0]) {
            hideModal();
        }
    });
}

const Footer = () => {
    detectClick();
    
    return (
        <footer className='footer' onLoad={hideModal}>
            <Link to='/contact-us'><button className="contact-us" tabIndex="0" onClick={showModal}>Contact Us</button></Link>
            <p className="copyright">
                This website template has been designed and developed by <strong>Szymon Hyziak</strong>.
                Find me on LinkedIn using the link <a href="https://www.linkedin.com/in/szymon-hyziak/" className='link' target="_blank" rel="noreferrer">here</a>. Thank you!
                Icons made by <a href="https://www.freepik.com" target="_blank" rel="noreferrer" className="link">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer" className="link">www.flaticon.com</a>.
            </p>
        </footer>
    )
}

export default Footer;
