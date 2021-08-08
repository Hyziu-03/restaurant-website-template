import { useState  } from 'react';
import KateSwift from '../kate-swift.jpg';

const CustomerReviews = () => {
    let [slideNumber, update] = useState(0);

    let customerWords = document.getElementById('customer-words');
    let reviews = [
        'Vivamus non blandit lacus. Morbi laoreet bibendum ipsum, eget gravida magna cursus vitae. Phasellus nec quam convallis, convallis orci non, consectetur magna.Suspendisse laoreet mi ac purus laoreet fringilla.In at dolor rhoncus, tempor nulla id, tempor nibh.Integer rutrum libero justo, eu fermentum est ultricies eget.',
        'Curabitur condimentum, lorem sit amet venenatis tempor, nisi enim ullamcorper quam, sed dignissim arcu leo et magna. Integer ullamcorper feugiat augue, et porttitor felis elementum non. Nam velit diam, volutpat non mauris eget, pretium efficitur diam. Quisque eget sagittis ipsum. Phasellus sit amet quam.',
        'Duis finibus ipsum sit amet bibendum iaculis. In risus leo, malesuada non sapien sed, cursus vestibulum nisl. Mauris mollis rutrum felis a sodales. Nulla sem ipsum, porttitor eu tellus vel, elementum condimentum nisi. Sed sed neque maximus, sollicitudin elit sed, tincidunt elit. Praesent vitae.'
    ];

    let signature = document.getElementById('signature');
    let signatures = [
        'Kate Swift',
        'John Doe',
        'Matt Smith'
    ];

    switch(slideNumber) {
        case 0:
            slideNumber = 1;
            customerWords.innerHTML = reviews[1];
            signature.innerHTML = signatures[1];
            console.log('Here is John Doe');
        break;
        
        case 1:
            slideNumber = 2;
            customerWords.innerHTML = reviews[2];
            signature.innerHTML = signatures[2];
            console.log('Here is Matt Smith');
        break;

        case 2:
            slideNumber = 0;
            customerWords.innerHTML = reviews[0];
            signature.innerHTML = signatures[0];
            console.log('Here is Kate Swift');
        break;

        default:
            
        break;
    }

    return (
        <article className='customer-reviews' id="customer-reviews">
            <i className="fas fa-chevron-circle-left" tabIndex="0" onClick={() => update(slideNumber + 1)}></i>
            <img src={KateSwift} className="customer-photo" alt=""/>
            <section className='feedback'>
                <p className="customer-words" id="customer-words"></p>
                <span className="signature" id="signature"></span>
            </section>
            <i className="fas fa-chevron-circle-right" tabIndex="0"></i>
        </article>  
    )
}

export default CustomerReviews;
