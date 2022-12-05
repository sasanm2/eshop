import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./checkout/checkout";
import Home from "./home";
import { useState } from "react";
import { StateContext } from "./stateprovider";
import Login from "./login/login";

const App = () => { 
  const [state, setState] = useState({
    basket:[],
  });

  const removeFromBasket = ()=>{
    const con = state.basket;
    setState({
      basket: [],
    })
  }

  console.log(state);
  

  return (
    <>
      <StateContext.Provider value={{
        state,
        setState,
        removeFromBasket,
      }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </StateContext.Provider>
    </>
  );
};

export default App;
