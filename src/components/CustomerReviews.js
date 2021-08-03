let KateSwiftPhoto = '<img src="../kate-swift.jpg" alt="" className="customer-photo"/>';
let MattSmithPhoto = '<img src="../matt-smith.jpg" alt="" className="customer-photo"/>';
let JohnDoePhoto = '<img src="../john-doe.jpg" alt="" className="customer-photo"/>';

class Customer {
    constructor(name, review) {
        this.name = name;
        this.review = review;
    }    
}

let KateSwift = new Customer('Kate Swift', 'Vivamus non blandit lacus. Morbi laoreet bibendum ipsum, eget gravida magna cursus vitae. Phasellus nec quam convallis, convallis orci non, consectetur magna. Suspendisse laoreet mi ac purus laoreet fringilla. In at dolor rhoncus, tempor nulla id, tempor nibh. Integer rutrum libero justo, eu fermentum est ultricies eget.');
let JohnDoe = new Customer('John Doe', 'Aliquam ultrices mattis tortor at varius. Vestibulum sit amet tellus eu est porta finibus at at lectus. Quisque a est vitae metus consequat vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non turpis vehicula, viverra tortor et, gravida ante.');
let MattSmith = new Customer('Matt Smith', 'Curabitur mattis libero et massa pulvinar, et vulputate neque lobortis. Nulla felis quam, volutpat sit amet convallis sit amet, egestas eu velit. Phasellus id nisl est. Donec non dictum leo, in scelerisque sem. Nulla pellentesque dolor et ante sodales, quis efficitur lacus aliquet. ');

let currentSlide = 'Kate Swift';
let customerWords = document.getElementById('customer-words');
let signature = document.getElementById('signature');

const changeSlides = () => {
    if(currentSlide === 'Kate Swift') {

        currentSlide = 'John Doe';
        customerWords.innerHTML = JohnDoe.review;
        signature.innerHTML = JohnDoe.name;

    } else if(currentSlide === 'John Doe') {
        
        currentSlide = 'Math Smith';
        customerWords.innerHTML = MattSmith.review;
        signature.innerHTML = MattSmith.name;

    } else {

        currentSlide = 'Kate Swift';
        customerWords.innerHTML = KateSwift.review;
        signature.innerHTML = KateSwift.name;

    }
}

const CustomerReviews = () => {
    return (
        <article className='customer-reviews' id="customer-reviews">
            <i className="fas fa-chevron-circle-left" tabIndex="0" onClick={changeSlides}></i>
            <div id="photo-goes-here"></div>
            <section className='feedback'>
                <p className="customer-words" id="customer-words">
                    Vivamus non blandit lacus. Morbi laoreet bibendum ipsum, eget gravida magna cursus vitae. Phasellus
                    nec quam convallis, convallis orci non, consectetur magna. Suspendisse laoreet mi ac purus laoreet
                    fringilla. In at dolor rhoncus, tempor nulla id, tempor nibh. Integer rutrum libero justo, eu
                    fermentum est ultricies eget.
                </p>
                <span className="signature" id="signature">Kate Swift</span>
            </section>
            <i className="fas fa-chevron-circle-right" tabIndex="0" onClick={changeSlides}></i>
        </article>  
    )
}

export default CustomerReviews;
