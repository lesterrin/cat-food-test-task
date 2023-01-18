import s from './card.module.css';
import catImg from '../../assets/images/Photo.png';

const Card = ({taste, portions, gift,kgs}) => {
    return (
        <>
            <div className={s.card_outside}>
                <div className={s.card_inside}>
                    <div className={s.description}>
                        <div className={s.caption}>Сказочное заморское яство</div>
                        <div className={s.title}>Нямушка</div>
                        <div className={s.taste}>{taste}</div>
                        <div className={s.annotation}><b>{portions}</b> порций <br/> {gift}</div>
                        <div className={s.kgs}>{kgs}</div>
                    </div>
                    <img className={s.cat_img} src={catImg}/>
                </div>
            </div>
            <div className={s.appeal}>
                Чего сидишь? Порадуй котэ, купи.
            </div>
        </>
    )
}

export default Card;