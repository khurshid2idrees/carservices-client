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
import { saveUser } from "./features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  // const [user, setUser] = useState({});

  const user = useSelector((state)=>state.cart.user)
  console.log(user)

  const dispatch = useDispatch();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:4000/")
      .then((user) => dispatch(saveUser(user.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
