import Header from "./header/header";
import Produce from "./produce/produce";
import './home.css';

const Home = () => {
return(
    <>
    <Header/>
    <img src={require('./img/eshop.png')} className='img'/>
    <div className="row">
        <Produce title="قوزک بند ادور مدل Elastic Ligament سایز بزرگ" price="تومان 101,000" src={require("./img/1.png")} rating={2}/>
        <Produce title="جاکلیدی طرح بچه گربه" price="تومان 14,000" src={require("./img/2.png")} rating={4}/>
    </div>
    <div className="row">
        <Produce title="جاکلیدی مدل یونیکورن" price="تومان 28,000" src={require("./img/4.png")} rating={5}/>
        <Produce title="جاکلیدی مدل جغد" price="تومان 25,000" src={require("./img/3.png")} rating={1}/>
        <Produce title="هندزفری بلوتوثی مدل  inpods 12" price="تومان 115,000" src={require("./img/5.png")} rating={4}/>
    </div>
    <div className="row">
        <Produce title="زعفران سحرخیز - 4.608 گرم" price="255,000 تومان" src={require("./img/6.png")} rating={2}/>
    </div>
    </>
)
}
 
export default Home;