import KateSwift from '../kate-swift.jpg';

const CustomerReviews = () => {
    return (
        <article className='customer-reviews'>
            <span className="arrow-left"></span>
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
            <span className="arrow-right"></span>
        </article>  
    )
}

export default CustomerReviews;
