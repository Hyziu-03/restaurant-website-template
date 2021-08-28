import { useState } from 'react';

const Menu = () => {
    let [pageNumber, switchPage] = useState(1);

    let dish = {
        categories: [
            'proin blandit',
            'suspendisse non',
            'fermentum ultrices',
            'volutpat vulputat'
        ],

        names: [
            ['Sed fermentum vulputate', 'Sapien nec lobortis libero', 'Tristique in suspendisse', 'Pellentesque mattis elit', 'Vel interdum velit luctus vel'],
            ['Nam nisi quam', 'Donec non viverra', 'Aliquam vitae scelerisque', 'Sed dignissim nisi', 'Morbi suscipit mattis'],
            ['Curabitur ante mi', 'Nulla a felis est', 'Donec porta convallis ', 'Vestibulum viverra suscipit ', 'Nullam viverra faucibus'],
            ['Vestibulum odio dolor', 'Mauris neque ligula', 'Praesent iaculis nunc', 'Cras sollicitudin est', 'Class aptent taciti ']
        ],

        prices: [
            [13.99, 11.99, 15.99, 17.99, 21.99],
            [22.99, 20.99, 18.99, 16.99, 24.99],
            [11.99, 21.99, 31.99, 25.99, 15.99],
            [6.99, 8.99, 10.99, 4.99, 8.99]
        ]
    }

    if(pageNumber === 4) {
        pageNumber = 0;
    }

    return (
        <section className="menu">
            <i className="fas fa-chevron-circle-left" id='menu-arrow-left' tabIndex="0" onClick={() => switchPage(pageNumber - 1)}></i>
            <h1 className="dish-category">You are viewing {dish.categories[pageNumber]}</h1>
            <i className="fas fa-times"></i>
            <ul className="dish-list">
                <li className="dish">{dish.names[pageNumber][0]}<span className="price">{dish.prices[pageNumber][0]} PLN</span></li>
                <li className="dish">{dish.names[pageNumber][1]}<span className="price">{dish.prices[pageNumber][1]} PLN</span></li>
                <li className="dish">{dish.names[pageNumber][2]}<span className="price">{dish.prices[pageNumber][2]} PLN</span></li>
                <li className="dish">{dish.names[pageNumber][3]}<span className="price">{dish.prices[pageNumber][3]} PLN</span></li>
                <li className="dish">{dish.names[pageNumber][4]}<span className="price">{dish.prices[pageNumber][4]} PLN</span></li>
            </ul>
            <i className="fas fa-chevron-circle-right" id='menu-arrow-right' tabIndex="0" onClick={() => switchPage(pageNumber + 1)}></i>
        </section>
    )
}

export default Menu;
