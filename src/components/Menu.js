import Header from "./Header";
import Footer from "./Footer";

const Menu = () => {
    return (
        <article className="menu-container">
            <Header />
            <article className="menu">
                <h1 className="dishes-category">You are viewing Category</h1>
                <section className="dishes">
                    <i className="fas fa-chevron-circle-left" tabIndex="0"></i>
                    <ul className="dishes-list">
                        <li className="dish">
                            Lorem <span className="price">15.00 PLN</span>
                        </li>
                        <li className="dish">
                            Ipsum <span className="price">16.50 PLN</span>
                        </li>
                        <li className="dish">
                            Dolor <span className="price">29.00 PLN</span>
                        </li>
                        <li className="dish">
                            Sit <span className="price">22.00 PLN</span>
                        </li>
                        <li className="dish">
                            Amet <span className="price">20.00 PLN</span>
                        </li>
                    </ul>
                    <i className="fas fa-chevron-circle-right" tabIndex="0"></i>
                </section>
            </article>
            <Footer />
        </article>
    )
}

export default Menu;
