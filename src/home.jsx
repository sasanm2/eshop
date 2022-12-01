import Header from "./header/header";
import Produce from "./produce/produce";
import './home.css';

const Home = () => {
return(
    <>
    <Header/>
    <img src={require('./img/eshop.png')} className='img'/>
    <div className="row">
        <Produce title="قوزک بند ادور مدل Elastic Ligament سایز بزرگ" price="تومان 101,000" src={require("./img/1.png")}/>
        <Produce title="جاکلیدی طرح بچه گربه" price="تومان 14,000" src={require("./img/2.png")}/>
    </div>
    <div className="row">
        <Produce title="جاکلیدی مدل یونیکورن" price="تومان 28,000" src={require("./img/4.png")}/>
        <Produce title="جاکلیدی مدل جغد" price="تومان 25,000" src={require("./img/3.png")}/>
        <Produce title="هندزفری بلوتوثی مدل  inpods 12" price="تومان 115,000" src={require("./img/5.png")}/>
    </div>
    <div className="row">
        <Produce title="زعفران سحرخیز - 4.608 گرم" price="255,000" src={require("./img/6.png")}/>
    </div>
    </>
)
}
 
export default Home;