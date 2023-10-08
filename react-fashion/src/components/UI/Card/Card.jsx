import style from './Card.module.css';


const Card = ({title, img}) => {

    return(
        <>
            <div className="col">
                <div className={style.card}>
                    <img src={img} alt=""/>
                    <div className={style.card_description}>
                        <p className={style.card_name}>{title}</p>
                        <p className={style.card_explore}>Explore now!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;