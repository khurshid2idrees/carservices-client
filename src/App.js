import "./App.css";
import Login from "./components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import { useEffect, createContext, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderDetails from "./components/OrderDetails";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/cart" element={<Cart />} />
        <Route  path="/checkout" element={<Checkout />} />
        <Route  path="/orders" element={<OrderDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
