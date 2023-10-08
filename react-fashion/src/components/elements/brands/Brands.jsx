import style from '../../elements/brands/Brands.module.css';

import hm from '../../../images/brands/HM.png';
import obey from '../../../images/brands/Obey.png';
import shopify from '../../../images/brands/Shopify.png';
import lacoste from '../../../images/brands/Lacoste.png';
import levis from '../../../images/brands/Levis.png';
import amazon from '../../../images/brands/Amazon.png';

function Brands() {
    return(
        <>
        <section className={style.brands}>
            <div className="container">
                <div className="row">
                    <ul className={style.brand_list}>
                        <li><img src={hm} alt="" /></li>
                        <li><img src={obey} alt="" /></li>
                        <li><img src={shopify} alt="" /></li>
                        <li><img src={lacoste} alt="" /></li>
                        <li><img src={levis} alt="" /></li>
                        <li><img src={amazon} alt="" /></li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}

export default Brands;