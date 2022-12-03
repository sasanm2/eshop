import './CheckoutProduce.css';
import { StateContext } from "../stateprovider";
import { useContext } from "react";

function CheckoutProduce(props) {
  const context = useContext(StateContext);
  const con = context.state;
  const con1 = context.setState;
  const con2 = con.basket;
  
  const removeFromBasket = ()=>{
      con1({
       basket : con2.filter(i=>i.id !== i.id ),
        })
    };



  return (
    <div className="checkout-produce">
    <img src={props.src} className='img'/>
    <div className="checkout-info">
        <p className='checkout-p'>{props.title}</p>
        <h2 className="checkout-h2">{props.price}تومان</h2>
    </div>
    <div className='container-btn'>
    <div className="chechout-rating">{Array(props.rating).fill().map((_,i,id)=><p key={id}>⭐</p>)}</div>
    <button className="btn" onClick={removeFromBasket}>حذف کردن به سبد</button>
    </div>
    </div>
  )
}

export default CheckoutProduce