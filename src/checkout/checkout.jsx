import "../checkout/checkout.css";
import Header from "../header/header";
import CheckoutProduce from "./CheckoutProduce";
import Subtotal from "./subtotal";

const Checkout = () => {
    return ( 
        <div className="checkout">
        <Header />
        <div className="checkout2">
            <div className="left">
                <h2>Your Shopping Basket</h2>
                <CheckoutProduce src={require('../img/2.png')}/>
            </div>
            <div className="right">
                <Subtotal />
            </div>
        </div>
        </div>
     );
}
 
export default Checkout;