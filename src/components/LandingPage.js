import Logo from '../pizza.png'

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
                    <button className="browse-our-menu">Browse our menu</button>
                    <button className="see-customer-reviews">See customer reviews</button>
                </section>
            </section>
            <img src={Logo} alt="Round and yummy pizza with tomatoes, cheese, olives and basil." className="logo" />
        </article>
    )
}

export default LandingPage;
