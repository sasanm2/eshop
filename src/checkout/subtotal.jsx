import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from "../stateprovider";
import { useContext, useState } from "react";

function Subtotal() {
  const context = useContext(StateContext);
  const con = context.state;
  const con1 = con.basket.length;
  return (
    <>
    <CurrencyFormat
        renderText={(value)=>(
            <>
                <p className='p1'>
                    subtotal ({con1} items): <strong>تومان 0</strong>
                </p>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
    />
    </>
  )
}

export default Subtotal;