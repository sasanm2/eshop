import './subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <>
    <CurrencyFormat
        renderText={(value)=>(
            <>
                <p className='p1'>
                    subtotal (0 items): <strong>تومان 0</strong>
                </p>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"تومان"}
    />
    </>
  )
}

export default Subtotal;