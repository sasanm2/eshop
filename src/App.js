import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./checkout/checkout";
import Home from "./home";
import { useState } from "react";
import { StateContext } from "./stateprovider";

const App = () => {
  const [state, setState] = useState({
    basket:[],
  });




  console.log(state);


  

  return (
    <>
      <StateContext.Provider value={{
        state,
        setState,
      }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </StateContext.Provider>
    </>
  );
};

export default App;
