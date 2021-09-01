import { Link } from 'react-router-dom';

import Pizza from '../img/pizza.png'

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

const LandingPage = () => {
    detectClick();

    return (
        <article className="landing-page" onLoad={hideModal}>
            <section className="textual-section">
                <section className="introduction">
                    <h2 className="headline">Headline that captures attention!</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed id sodales ligula. Cras
                        in elementum mauris, id suscipit libero.
                        Duis at massa sit amet ligula porta accumsan
                        at id elit.
                    </p>
                </section>
                <section className="landing-page-buttons">
                        <button className="browse-our-menu focusable-button" tabIndex="0" onClick={showModal}>
                            <Link to='/menu' className="button-link" id='browse-our-menu'>Browse our menu</Link>
                        </button>

                    <button className="see-customer-reviews focusable-button" tabIndex="0">
                        <a href="#customer-reviews" className="button-link">See customer reviews</a>
                    </button>
                </section>
            </section>
            <img src={Pizza} alt="Round and yummy pizza with tomatoes, cheese, olives and basil." className="pizza" />
        </article>
    )
}

export default LandingPage;
