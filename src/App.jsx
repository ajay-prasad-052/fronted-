import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

import Home from "./page/Home/Home";
import Cart from "./page/Cart/Cart";
import PlaceOrder from "./page/placeorder/placeorder";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
