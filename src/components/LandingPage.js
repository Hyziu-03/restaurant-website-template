import ReactDOM from 'react-dom';
import Menu from '../components/modal-boxes/Menu';
import Pizza from '../img/pizza.png';

const hideModal = (e) => {
    e.preventDefault();

    let placeholder = document.getElementById('placeholder');           
    placeholder.style.display = 'none';
    ReactDOM.unmountComponentAtNode(document.getElementById('placeholder'));

    let container = document.getElementById('container');
    container.style.filter = '';
    container.style.pointerEvents = 'auto';
}

const showModal = () => { 
    let placeholder = document.getElementById('placeholder');
    ReactDOM.render(<Menu />, placeholder);
    placeholder.style.display = 'block';
    
    let container = document.getElementById('container');
    container.style.filter = 'blur(8px)';
    container.style.pointerEvents = 'none';
}

const detectClick = () => {
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementsByClassName('fa-times')[0]) {
            hideModal(e);
        }
    });
}

const LandingPage = () => {
    detectClick();

    return (
        <article className='landing-page' onLoad={hideModal}>
            <section className='textual-section'>
                <section className='introduction'>
                    <h2 className='headline'>Headline that captures attention!</h2>
                    <p className='description'>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed id sodales ligula. Cras
                        in elementum mauris, id suscipit libero.
                        Duis at massa sit amet ligula porta accumsan
                        at id elit.
                    </p>
                </section>
                <section className='landing-page-buttons'>
                        <button className='browse-our-menu focusable-button' onClick={showModal} tabIndex='0'>
                            <span tabIndex='0' className='button-link' id='browse-our-menu'>Browse our menu</span>
                        </button>

                    <button className='see-customer-reviews focusable-button' tabIndex='0'>
                        <a href='#customer-reviews' tabIndex='-1' className='button-link'>See customer reviews</a>
                    </button>
                </section>
            </section>
            <img src={Pizza} alt='Round and yummy pizza with tomatoes, cheese, olives and basil.' className='pizza' />
        </article>
    )
}

export default LandingPage;
