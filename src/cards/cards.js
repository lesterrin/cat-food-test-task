import s from './cards.module.css';
import Card from './card';

const Cards = () => {
    const cardsData = [{taste: 'с фуаг-ра', portions: 10, gift: 'мышь в подарок', kgs: '0,5'}];
    const cards = cardsData.map(e => <Card {...e}/>);
    return (
        <>
            <div>cards</div>
            {cards}
        </>
    );
}

export default Cards;