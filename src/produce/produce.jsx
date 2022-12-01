import "../produce/produce.css";

const Produce = (props) => {
    return ( 
    <div className="produce">
    <div className="info">
        <p>{props.title}</p>
    </div>
    <img src={props.src}/>
    <h2 className="h2">{props.price}</h2>
    <button className="btn-basket">اضافه کردن به سبد</button>
    </div> 
    );
}
 
export default Produce;