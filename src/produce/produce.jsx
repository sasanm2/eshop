import "../produce/produce.css";
import { StateContext } from "../stateprovider";
import { useContext } from "react";

const Produce = (props) => {

const context = useContext(StateContext);
const con = context.state;
const con1 = context.setState;
  
 const addToBasket = ()=>{
        con1({
            basket: [...con.basket,{
                id: props.id,
                title: props.title,
                image: props.src,
                rating:props.rating,
                price: props.price,
            }],
        })
    };


    return ( 
    
        <div className="produce">
    <div className="info">
        <p>{props.title}</p>
    </div>
    <img src={props.src}/>
    <h2 className="h2">{props.price}تومان</h2>
    <div className="rating">{Array(props.rating).fill().map((i,id)=><p key={id}>⭐</p>)}</div>
    <button className="btn-basket" onClick={addToBasket} >اضافه کردن به سبد</button>
    </div>
    );
}
 
export default Produce;