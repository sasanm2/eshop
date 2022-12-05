import './CheckoutProduce.css';
import { StateContext } from "../stateprovider";
import { useContext } from "react";

function CheckoutProduce({src,id,rating,title,price}) {
  const context = useContext(StateContext);
  const con = context.state;
  const con1 = context.setState;
  const con2 = con.basket;
  const con3 = context.removeFromBasket;
  


  return (
   <>
   <div className="checkout-produce">
   <img src={src} className='img'/>
   <div className="checkout-info">
       <p className='checkout-p'>{title}</p>
       <h2 className="checkout-h2">{price}تومان</h2>
   </div>
   <div className='container-btn'>
   <div className="chechout-rating">{Array(rating).fill().map((_,i,id)=><p key={id}>⭐</p>)}</div>
   <button className="btn" onClick={con3} >حذف کردن به سبد</button>
   </div>
   </div>
   </>
   
  )
}

export default CheckoutProduce