import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./checkout/checkout";
import Home from "./home";

const App = () => {
   return(
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
    </Router>
    </>
   )
}
 
export default App;