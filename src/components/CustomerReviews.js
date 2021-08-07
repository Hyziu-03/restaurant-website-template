import { useState  } from 'react';
import KateSwift from '../kate-swift.jpg';

const CustomerReviews = () => {
    let [slideNumber, update] = useState(0);
    let customerWords = document.getElementById('customer-words');
    let signature = document.getElementById('signature');

    switch(slideNumber) {
        case 0:

        break;
        
        case 1:

        break;

        case 2:

        break;

        case 3:
            slideNumber = 0;
        break;

        default:

        break;
    }

    return (
        <article className='customer-reviews' id="customer-reviews">
            <i className="fas fa-chevron-circle-left" tabIndex="0" onClick={() => update(slideNumber + 1)}></i>
            <img src={KateSwift} className="customer-photo" />
            <section className='feedback'>
                <p className="customer-words" id="customer-words">
                    Vivamus non blandit lacus. Morbi laoreet bibendum ipsum, eget gravida magna cursus vitae. Phasellus
                    nec quam convallis, convallis orci non, consectetur magna. Suspendisse laoreet mi ac purus laoreet
                    fringilla. In at dolor rhoncus, tempor nulla id, tempor nibh. Integer rutrum libero justo, eu
                    fermentum est ultricies eget.
                </p>
                <span className="signature" id="signature">Kate Swift</span>
            </section>
            <i className="fas fa-chevron-circle-right" tabIndex="0"></i>
        </article>  
    )
}

export default CustomerReviews;
