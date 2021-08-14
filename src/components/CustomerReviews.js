import { useState  } from 'react';
import KateSwift from './customers/KateSwift';
import JohnDoe from './customers/JohnDoe';
import MattSmith from './customers/MattSmith';

const CustomerReviews = () => {
    let [slideNumber, update] = useState(0);

    let reviews = [
        'Vivamus non blandit lacus. Morbi laoreet bibendum ipsum, eget gravida magna cursus vitae. Phasellus nec quam convallis, convallis orci non, consectetur magna.Suspendisse laoreet mi ac purus laoreet fringilla.In at dolor rhoncus, tempor nulla id, tempor nibh.Integer rutrum libero justo, eu fermentum est ultricies eget.',
        'Curabitur condimentum, lorem sit amet venenatis tempor, nisi enim ullamcorper quam, sed dignissim arcu leo et magna. Integer ullamcorper feugiat augue, et porttitor felis elementum non. Nam velit diam, volutpat non mauris eget, pretium efficitur diam. Quisque eget sagittis ipsum. Phasellus sit amet quam.',
        'Duis finibus ipsum sit amet bibendum iaculis. In risus leo, malesuada non sapien sed, cursus vestibulum nisl. Mauris mollis rutrum felis a sodales. Nulla sem ipsum, porttitor eu tellus vel, elementum condimentum nisi. Sed sed neque maximus, sollicitudin elit sed, tincidunt elit. Praesent vitae.'
    ];
    
    let signatures = [
        'Kate Swift',
        'John Doe',
        'Matt Smith'
    ];
    
    let photos = [
        <KateSwift />,
        <JohnDoe />,
        <MattSmith />
    ];

    let iterator = Math.abs(slideNumber % 3);
    
    try {
        switch (iterator) {
            case 0:
                slideNumber = 1;
                break;

            case 1:
                slideNumber = 2;
                break;

            case 2:
                slideNumber = 0;
                break;

            default:
                console.error('[KNOWN ISSUE] Slide index is out of range.');
                break;
        }
    } catch (exception) {
        throw new Error(exception);
    }

    return (
        <article className='customer-reviews' id="customer-reviews">
            <i className="fas fa-chevron-circle-left" tabIndex="0" onClick={() => update(slideNumber)}></i>
            {photos[slideNumber]}
            <section className='feedback'>
                <p className="customer-words" id="customer-words">{reviews[slideNumber]}</p>
                <span className="signature" id="signature">{signatures[slideNumber]}</span>
            </section>
            <i className="fas fa-chevron-circle-right" tabIndex="0" onClick={() => update(slideNumber + 1)}></i>
        </article>  
    )
}

export default CustomerReviews;
