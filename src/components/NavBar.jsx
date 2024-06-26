import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const products = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.cart.user);
  const order = useSelector((state) => state.orders);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    axios.get("http://localhost:4000/logout").then((res) => {
      if (res.data === "success") {
        window.location.href = "/";
      }
    });
  };

  return (
    <>
      <>
        <nav
          id="header"
          className="w-full sticky     py-1 bg-white shadow-xl  "
        >
          <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer md:hidden block"
            >
              <svg
                className="fill-current text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
            <div
              className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
              id="menu"
            >
              <nav>
                <ul className="md:flex items-center justify-between text-base text-black pt-4 md:pt-0">
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                      to={`/`}
                    >
                      HOME
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                      to={`/cart`}
                    >
                      CART
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                      to={`/checkout`}
                    >
                      CHECKOUT
                    </Link>
                  </li>
                  {order && order.length ? (
                    <>
                      <li>
                        <Link
                          className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                          to={`/orders`}
                        >
                          CHECKOUT
                        </Link>
                      </li>
                    </>
                  ) : null}
                </ul>
              </nav>
            </div>
            <div
              className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
              id="nav-content"
            >
              {/* <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
                Logout
              </button> */}

              <div className="auth flex items-center w-full md:w-full">
                <Link to={`/cart`}>
                  <div className="mr-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="flex absolute -mt-8 ml-4">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-black opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-6 w-6 bg-black">
                        <span className="ml-2 text-white">
                          {products.length > 0 ? products.length : 0}
                        </span>
                      </span>
                    </span>
                  </div>
                </Link>
                {user && user.name ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to={`/login`}>
                      <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
                        Log in
                      </button>
                    </Link>
                    <Link to={`/register`}>
                      <button className="bg-gray-800 text-gray-200  p-2 rounded   hover:text-gray-100">
                        Register
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </>
    </>
  );
}
