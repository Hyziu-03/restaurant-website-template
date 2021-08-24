import ReactDOMServer from 'react-dom/server';
import Pizza from '../img/pizza.png'
import Menu from './Menu';

    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('browse-our-menu')) {
           document.getElementById('placeholder').innerHTML = ReactDOMServer.renderToString( <Menu /> );
        }
        else if (e.target !== document.getElementById('placeholder')) {
            document.getElementById('placeholder').innerHTML = '';
        }
    });


const LandingPage = () => {
    return (
        <article className="landing-page">
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
                        <button className="browse-our-menu focusable-button" tabIndex="-1">
                            <span className="button-link" id='browse-our-menu'>Browse our menu</span>
                        </button>

                    <button className="see-customer-reviews focusable-button" tabIndex="-1">
                        <a href="#customer-reviews" className="button-link">See customer reviews</a>
                    </button>
                </section>
            </section>
            <img src={Pizza} alt="Round and yummy pizza with tomatoes, cheese, olives and basil." className="pizza" />
        </article>
    )
}

export default LandingPage;
