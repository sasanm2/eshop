import './basket.css';

const Basket = () => {
return(
    <>
    <nav className="nav">
    <div className="line1">
    <span className="first-line">Hello Guest</span>
    <span className="secend-line">Sign In</span>
    </div>
    <div className="line2">
    <span className="first-line">Your</span>
    <span className="secend-line">Shop</span>
    </div>
    <div className="line3">
    <span className="first-line"><img src={require("../img/icons8-shopping-cart-40.png")}/></span>
    <span className="secend-line basket-Count">0</span>
    </div>
    </nav>
    </>
);

}
 
export default Basket;