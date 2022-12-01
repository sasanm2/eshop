import Logo from './logo';
import Search from './search';
import Basket from './basket';
import "./header.css";

const Header = () => {
return(
    <div className='header'>
    <Logo/>
    <Search/>
    <Basket/>
    </div>
);

}
 
export default Header;