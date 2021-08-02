import KateSwift from '../kate-swift.jpg';
import JohnDoe from '../john-doe.jpg';
import MattSmith from '../matt-smith.jpg';

// $ Check this: https://www.cloudhadoop.com/reactjs-display-image-url/.

let currentSlide = 'Kate Swift';

const changeSlides = () => {
    if(currentSlide === 'Kate Swift') {
        currentSlide = 'John Doe';


    } else if(currentSlide === 'John Doe') {
        currentSlide = 'Math Smith';


    } else {
        currentSlide = 'Kate Swift';


    }
    console.log('You are viewing ' + currentSlide);
}

const CustomerReviews = () => {
    return (
        <article className='customer-reviews' id="customer-reviews">
            <i className="fas fa-chevron-circle-left" tabIndex="0" onClick={changeSlides}></i>
            <img src={KateSwift} alt="" className="customer-photo"/>
            <section className='feedback'>
                <p className="customer-words">
                    Vivamus non blandit lacus. Morbi laoreet bibendum ipsum, eget gravida magna cursus vitae. Phasellus
                    nec quam convallis, convallis orci non, consectetur magna. Suspendisse laoreet mi ac purus laoreet
                    fringilla. In at dolor rhoncus, tempor nulla id, tempor nibh. Integer rutrum libero justo, eu
                    fermentum est ultricies eget.
                </p>
                <span className="signature">Kate Swift</span>
            </section>
            <i className="fas fa-chevron-circle-right" tabIndex="0" onClick={changeSlides}></i>
        </article>  
    )
}

export default CustomerReviews;
