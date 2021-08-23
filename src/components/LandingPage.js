import ReactDOMServer from 'react-dom/server';
import Pizza from '../img/pizza.png'
import Menu from './Menu';

const openMenu = () => {
    document.body.innerHTML += ReactDOMServer.renderToString(<Menu />);
}

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
                        <button className="browse-our-menu focusable-button" tabIndex="-1" onClick={openMenu}>
                            <span className="button-link">Browse our menu</span>
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
