import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ProductProvider>
  );
};

export default App;
