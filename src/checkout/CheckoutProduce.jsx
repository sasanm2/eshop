import './CheckoutProduce.css';

function CheckoutProduce(props) {
  return (
    <div className="checkout-produce">
    <img src={props.src} className='img'/>
    <div className="checkout-info">
        <p className='p'>ghhjkku</p>
        <h2 className="h2">{"110,000 "}تومان</h2>
    </div>
    <div className="chechout-rating">{Array(props.rating).fill().map((_,i)=><p>⭐</p>)}</div>
    <button className="btn">حذف کردن به سبد</button>
    </div>
  )
}

export default CheckoutProduce