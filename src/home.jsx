import Header from "./header/header";
import Produce from "./produce/produce";
import './home.css';

const Home = () => {
 return(
    <>

    <Header/>
    <img src={require('./img/eshop.png')} className='img-2'/>
    <div className="row">
        <Produce id={1} title="قوزک بند ادور مدل Elastic Ligament سایز بزرگ" price={101000} src={require("./img/1.png")} rating={2}/>
        <Produce id={2} title="جاکلیدی طرح بچه گربه" price={14000} src={require("./img/2.png")} rating={4}/>
    </div>
    <div className="row">
        <Produce id={3}  title="جاکلیدی مدل یونیکورن" price={28000} src={require("./img/4.png")} rating={5}/>
        <Produce id={4} title="جاکلیدی مدل جغد" price={25000} src={require("./img/3.png")} rating={1}/>
        <Produce id={5} title="هندزفری بلوتوثی مدل  inpods 12" price={115000} src={require("./img/5.png")} rating={4}/>
    </div>
    <div className="row">
        <Produce id={6} title="زعفران سحرخیز - 4.608 گرم" price={255000} src={require("./img/6.png")} rating={2}/>
    </div>

    </>
)
}
 
export default Home;