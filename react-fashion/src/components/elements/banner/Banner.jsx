import style from './Banner.module.css';
import imageBanner from '../../../images/images/header-img.jpg'

function Banner() {
    return (
        <>
        <div className={style.banner}>
            <div className={"container"}>
                <div className={`${style.banner_context} row`}>
                    <div className={`${style.banner_text} col`}>
                        <p className={style.big_text}>Let's <br/>explore <br/>unique <br/>clothes</p>
                        <p className={style.small_text}>Live for Influential and Innovative fashion!</p>
                        <div className={style.svg_button}>
                            <svg width="190" height="32" viewBox="0 0 190 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 30.6355C48 -11.8238 146.667 -1.07545 190 9.60614C176.4 33.6398 57.6667 33.6398 0 30.6355Z" fill="#EBD96B"/>
                            </svg>
                            <button className={style.banner_button}>Shop now</button>
                        </div>
                    </div>
                    <img className={`${style.banner_image} col`} 
                        src={imageBanner}
                        alt='Let`s
                        explore
                        unique
                        clothes'
                    />                        
                </div>
            </div>
        </div>       
        </>
    )
}

export default Banner;