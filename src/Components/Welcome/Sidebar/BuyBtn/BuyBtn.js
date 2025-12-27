import {Link} from 'react-router-dom'
import Style from './BuyBtn.module.css'

const BuyBtn = () => {
    return (
    <div className={Style.buybtn}>
        <Link to="/">Buy Crypto</Link>
        <ul>
            <li>Visa, mastercard</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
        </ul>
    </div>
    );
};

export default BuyBtn;
