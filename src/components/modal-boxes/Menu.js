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
            ['Sed fermentum', 'Sapien nec lobortis', 'Tristique in suspendisse', 'Pellentesque mattis elit', 'Vel interdum velit'],
            ['Nam nisi quam', 'Donec non viverra', 'Morbi suscipit mattis', 'Sed dignissim nisi', 'Aliquam vitae'],
            ['Curabitur ante mi', 'Nulla a felis', 'Donec porta convallis ', 'Vestibulum viverra ', 'Nullam viverra '],
            ['Vestibulum odio', 'Mauris neque ligula', 'Praesent iaculis nunc', 'Cras sollicitudin est', 'Class aptent taciti ']
        ],

        prices: [
            [13.99, 11.99, 15.99, 17.99, 21.99],
            [22.99, 20.99, 18.99, 16.99, 24.99],
            [11.99, 21.99, 31.99, 25.99, 15.99],
            [6.99, 8.99, 10.99, 4.99, 8.99]
        ]
    }

    let iterator = Math.abs(pageNumber % 4);
    
    let lineBreak = window.innerWidth <= 750 ? <br/> : undefined;

    return (
        <section className="menu">
            <i className="fas fa-chevron-circle-left" id='menu-arrow-left' tabIndex="0" onClick={() => switchPage(pageNumber - 1)}></i>
            <h1 className="dish-category">You are viewing {dish.categories[iterator]}</h1>
            <i className="fas fa-times" tabIndex='0'></i>
            <ul className="dish-list">
                <li className="dish">{dish.names[iterator][0]} {lineBreak} <span className="price">{dish.prices[iterator][0]} PLN</span></li>
                <li className="dish">{dish.names[iterator][1]} {lineBreak} <span className="price">{dish.prices[iterator][1]} PLN</span></li>
                <li className="dish">{dish.names[iterator][2]} {lineBreak} <span className="price">{dish.prices[iterator][2]} PLN</span></li>
                <li className="dish">{dish.names[iterator][3]} {lineBreak} <span className="price">{dish.prices[iterator][3]} PLN</span></li>
                <li className="dish">{dish.names[iterator][4]} {lineBreak} <span className="price">{dish.prices[iterator][4]} PLN</span></li>
            </ul>
            <i className="fas fa-chevron-circle-right" id='menu-arrow-right' tabIndex="0" onClick={() => switchPage(pageNumber + 1)}></i>
        </section>
    )
}

export default Menu;
