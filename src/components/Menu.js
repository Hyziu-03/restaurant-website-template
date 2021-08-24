const Menu = () => {
    return (
        <section className="menu">
            <h1 className="dish-category">You are viewing Proin blandit</h1>
            <i className="fas fa-times"></i>
            <ul className="dish-list">
                <li className="dish">Sed fermentum vulputate <span className="price">14.00 PLN</span></li>
                <li className="dish">Sapien nec lobortis libero <span className="price">11.00 PLN</span></li>
                <li className="dish">Tristique in suspendisse <span className="price">16.00 PLN</span></li>
                <li className="dish">Pellentesque mattis elit <span className="price">19.00 PLN</span></li>
                <li className="dish">Vel interdum velit luctus vel <span className="price">24.00 PLN</span></li>
            </ul>
        </section>
    )
}

export default Menu;
