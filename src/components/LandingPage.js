import Pizza from '../pizza.png'

const highlightButton = (id) => {
    const focusableButtons = document.getElementsByClassName('focusable-button');
    
    /*
    focusableButtons[id].style.background = 'rgb(55, 226, 28)';
    focusableButtons[id].style.color = '#303030';
    focusableButtons[id].style.boxShadow = '4px 4px 4px 0 rgba(55, 226, 28, 0.25)';
    focusableButtons[id].style.cursor = 'pointer';
    focusableButtons[id].style.borderColor = 'transparent';
    */
}

const revertFirstButton = () => {
    const focusableButtons = document.getElementsByClassName('focusable-button');

    focusableButtons[0].style.background = 'rgb(25, 44, 108)';
    focusableButtons[0].style.color = '#f8f8f8';
    focusableButtons[0].style.boxShadow = '4px 4px 4px 0 rgba(25, 44, 108, 0.5)';
    focusableButtons[0].style.cursor = '';
    focusableButtons[0].style.borderColor = 'rgb(25, 44, 108)';
}

const revertSecondButton = () => {
    const focusableButtons = document.getElementsByClassName('focusable-button');

    focusableButtons[1].style.background = 'inherit';
    focusableButtons[1].style.color = 'inherit';
    focusableButtons[1].style.boxShadow = '4px 4px 4px 0 rgba(25, 44, 108, 0.5)';
    focusableButtons[1].style.cursor = 'inherit';
    focusableButtons[1].style.borderColor = 'inherit';
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
                    <button className="browse-our-menu focusable-button" tabIndex="-1">
                        <a href="menu.html" className="button-link" onFocus={highlightButton(0)} onBlur={revertFirstButton}>Browse our menu</a>
                    </button>
                    <button className="see-customer-reviews focusable-button" tabIndex="-1">
                        <a href="#customer-reviews" className="button-link" onFocus={highlightButton(1)} onBlur={revertSecondButton}>See customer reviews</a>
                    </button>
                </section>
            </section>
            <img src={Pizza} alt="Round and yummy pizza with tomatoes, cheese, olives and basil." className="pizza" />
        </article>
    )
}

export default LandingPage;
