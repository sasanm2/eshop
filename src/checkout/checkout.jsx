import "../checkout/checkout.css";
import Header from "../header/header";
import CheckoutProduce from "./CheckoutProduce";
import Subtotal from "./subtotal";
import { StateContext } from "../stateprovider";
import { useContext, useState } from "react";

const Checkout = () => {
  
  const context = useContext(StateContext);
  const con = context.state;
  const con1 = con.basket;



  return (
    <div className="checkout">
      <Header />
      <div className="checkout2">
        <div className="left">
          <h2>Your Shopping Basket</h2>
          <div>{con1.map((item)=>(
  <CheckoutProduce 
  id= {item.id}
  src = {item.image} 
  price = {item.price}
  title= {item.title}
  rating={item.rating}
  />))}</div>
        </div>
        <div className="right">
          <Subtotal />
          <button className="btn-order">تایید نهایی</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
