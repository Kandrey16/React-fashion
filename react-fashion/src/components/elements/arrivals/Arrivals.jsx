import style from './Arrivals.module.css';
import Card from '../../UI/Card/Card.jsx'
import cat1 from '../../../images/categories/cat-01.jpg';
import cat2 from '../../../images/categories/cat-02.jpg';
import cat3 from '../../../images/categories/cat-03.jpg';


function Arrivals() {
    return(
        <>
        <div className={style.arrivals}>
            <div className="container">
                <h2>NEW ARRIVALS</h2>
                <div className="row">
                    <Card title="Hoodies & Sweetshirt" img={cat1} />
                    <Card title="Coats & Parkas" img={cat2} />
                    <Card title="Tees & T-Shirt" img={cat3} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Arrivals;