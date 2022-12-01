import { useNavigate } from 'react-router-dom';
import './logo.css';

const Logo = () => {

const navigate = useNavigate();   


return(
    <>
    <div className="logoM" onClick={()=>{navigate('/')}}>
    <span className="logo"><img src={require('../img/icons8-basket-50.png')} /></span>
    <span className="brand">Eshop</span>
    </div>
    </>
);

}
 
export default Logo;