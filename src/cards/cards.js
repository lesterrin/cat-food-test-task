import s from './cards.module.css';
import Card from './card';
import React from "react";

const Cards = () => {
    const cardsData = [
        {
            id: 1,
            taste: 'с фуаг-ра',
            portions: 10,
            mouses: 1,
            weight: '0,5',
            status: 'default',
            selectedAppeal: 'Печень утки разварная с артишоками'
        },
        {
            id: 2,
            taste: 'с рыбой',
            portions: 40,
            mouses: 2,
            weight: '2',
            status: 'default',
            selectedAppeal: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        },
        {
            id: 3,
            taste: 'с курой',
            portions: 100,
            mouses: 5,
            weight: '5',
            status: 'disabled',
            addit: 'заказчик доволен',
            selectedAppeal: 'Филе из цыплят с трюфелями в бульоне.'
        }
    ];

    const cards = cardsData.map(e => <Card key={e.id} {...e}/>);
    return (
        <>
            <div className={s.cards_wrapper}>{cards}</div>
        </>
    );
}

export default Cards;
