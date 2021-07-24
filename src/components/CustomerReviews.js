import KateSwift from '../kate-swift.jpg';

const CustomerReviews = () => {
    return (
        <article className='customer-reviews' id="customer-reviews">
            <i className="fas fa-chevron-circle-left" tabIndex="0"></i>
            <img src={KateSwift} alt="" className="customer-photo" />
            <section className='feedback'>
                <p className="customer-words">
                    Vivamus non blandit lacus. Morbi laoreet bibendum ipsum, eget gravida magna cursus vitae. Phasellus
                    nec quam convallis, convallis orci non, consectetur magna. Suspendisse laoreet mi ac purus laoreet
                    fringilla. In at dolor rhoncus, tempor nulla id, tempor nibh. Integer rutrum libero justo, eu
                    fermentum est ultricies eget.
                </p>
                <span className="signature">Kate Swift</span>
            </section>
            <i className="fas fa-chevron-circle-right" tabIndex="0"></i>
        </article>  
    )
}

export default CustomerReviews;
