import { useNavigate } from "react-router-dom";
import "./basket.css";
import { StateContext } from "../stateprovider";
import { useContext, useState } from "react";

const Basket = () => {
  const context = useContext(StateContext);
  const con = context.state;
  const con1 = con.basket.length;

  
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/checkout");
  };

  const handleSignIn = () => {
    navigate("/login");
  };


  return (
  
    <>
      <nav className="nav">
        <div className="line1" onClick={handleSignIn}>
          <span className="first-line">Hello Guest</span>
          <span className="secend-line">Sign In</span>
        </div>
        <div className="line2">
          <span className="first-line">Your</span>
          <span className="secend-line">Shop</span>
        </div>
        <div className="line3" onClick={handleclick}>
          <span className="first-line">
            <img src={require("../img/icons8-shopping-cart-40.png")} />
          </span>
          <span className="secend-line basket-Count">{con1}</span>
        </div>
      </nav>
    </>
  );
};

export default Basket;
