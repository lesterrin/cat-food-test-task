import s from './card.module.css';
import catImg from '../../assets/images/Photo.png';
import React, {useState} from "react";

const Card = ({taste, portions, weight, mouses, addit, status, selectedAppeal}) => {

    const [state,setState] = useState({status: status});

    const onSetState = () => {
        setState({
            ...state,
            status: 'selected'
        })
    }

    let mouseText;

    if (mouses === 1) mouseText = 'мышь';
    if (mouses === 2) mouseText = <><b>{mouses}</b> мыши</>;
    if (mouses > 2) mouseText = <><b>{mouses}</b> мышей</>;

    let appeal;

    if (state.status === 'default')  appeal = <>Чего сидишь? Порадуй котэ, <span className={s.blue}> <span className={s.buy} onClick={onSetState}>купи</span>.</span></>;
    if (state.status === 'selected')  appeal = selectedAppeal;
    if (state.status === 'disabled')  appeal = <div className={s.gold}>Печалька, с {taste} закончился</div>;

    const style = s[state.status];

    return (
        <div>
            <div className={`${s.card_outside} ${style}`}>
                <div className={s.card_inside}>
                    <div className={s.description}>
                        <div className={s.caption}>Сказочное заморское яство</div>
                        <div className={s.title}>Нямушка</div>
                        <div className={s.taste}>{taste}</div>
                        <div className={s.annotation}>
                            <b>{portions}</b> порций <br/>
                            {mouseText} в подарок <br/>
                            {addit}
                        </div>
                    </div>
                    <div className={`${s.weight_round} ${style}`}>
                        <div className={s.weight_wrapper}>
                            <div className={s.weight}>{weight}</div>
                            <div className={s.kgs}>кг</div>
                        </div>
                    </div>
                    <img className={s.cat_img} src={catImg}/>
                </div>
            </div>
            <div className={s.appeal}>
                {appeal}
            </div>
        </div>
    )
}

export default Card;
