import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom';
import Menu from '../components/modal-boxes/Menu';
import Pizza from '../img/pizza.png'

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

let childrenNodes = [
    document.getElementsByClassName('menu')[0], 
    document.getElementsByClassName('dish-category')[0], 
    document.getElementsByClassName('dish-list')[0], 
    document.getElementsByClassName('dish')[0], 
    document.getElementsByClassName('dish')[1], 
    document.getElementsByClassName('dish')[2], 
    document.getElementsByClassName('dish')[3], 
    document.getElementsByClassName('dish')[4], 
    document.getElementsByClassName('price')[0], 
    document.getElementsByClassName('price')[1], 
    document.getElementsByClassName('price')[2], 
    document.getElementsByClassName('price')[3], 
    document.getElementsByClassName('price')[4]
];

const detectPlace = () => {
    window.addEventListener('click', (e) => {
        childrenNodes.some((node) => e.target === node) ? console.log('Clicked inside!') : console.log('Clicked outside!');
        console.log(e.target);
    });
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
    detectPlace();

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
                            <Link to='/menu' tabIndex='-1' className='button-link' id='browse-our-menu'>Browse our menu</Link>
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
