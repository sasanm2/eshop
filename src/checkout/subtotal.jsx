import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from "../stateprovider";
import { useContext, useState } from "react";

function Subtotal() {
  const context = useContext(StateContext);
  const con = context.state;
  const con1 = con.basket.length;
  const con2 = con.basket;

  const basketotal = (con2)=>{
    return(con2.reduce((amount,item)=>amount = item.price+amount,0
   )) 
  } 

  return (
    <>
    <CurrencyFormat
        renderText={(value)=>(
            <>
                <p className='p1'>
                    subtotal ({con1} items): <strong>تومان {value}</strong>
                </p>
            </>
        )}
        decimalScale={2}
        value={basketotal(con2)}
        displayType={"text"}
        thousandSeparator={true}
    />
    </>
  )
}

export default Subtotal;