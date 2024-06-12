import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addOrders } from "../features/cartSlice";
import { resetCart } from "../features/cartSlice";
import { resetState } from "../features/cartSlice";
import { createOrder } from "../features/cartSlice";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.cart.cartItems);

  const user = useSelector((state) => state.cart.user);

  // console.log(user,'yi he to hai ')

  const allprice = cartitems.map((data) => Number(data.price) * data.quantity);
  const totalPrice = allprice.reduce((a, b) => a + b, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const myaddress = {
      name,
      email,
      address,
      city,
      state,
      zip,
      country,
    };

    console.log(myaddress, "ye to rha");

    dispatch(createOrder({ cart: cartitems, user, fulladdress: myaddress }));
    // dispatch(resetCart());

    console.log({ cart: cartitems, user: user, address: myaddress }, "kdhere");
  };

  return (
    <>
      <>
        <div className="h-screen grid grid-cols-3">
          <div className="lg:col-span-2 grid-col col-span-3 bg-indigo-50 space-y-8 md:px-12">
            <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
           
              <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
                Complete your shipping and payment details below.
              </div>
              <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
              
              </div>
            </div>
            <div className="rounded-md">
              <form id="payment-form" onSubmit={handleSubmit}>
                <section>
                  <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                    Shipping &amp; Billing Information
                  </h2>
                  <fieldset className="mb-3 bg-white shadow-lg md:py-8 py-4 rounded text-gray-600">
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2 w-20">Name</span>
                      <input
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        className="focus:outline-none px-3 "
                        placeholder="Try Odinsson"
                        required={true}
                      />
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2 w-20">Email</span>
                      <input
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="focus:outline-none px-3"
                        placeholder="try@example.com"
                        required={true}

                      />
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2 w-20">Address</span>
                      <input
                        name="address"
                        onChange={(e) => setAddress(e.target.value)}
                        className="focus:outline-none px-3"
                        placeholder="10 Street XYZ 654"
                        required={true}

                      />
                    </label>
                    <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                      <span className="text-right px-2 w-20">City</span>
                      <input
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                        className="focus:outline-none px-3"
                        placeholder="San Francisco"
                        required={true}

                      />
                    </label>
                    <label className="inline-flex md:ml-0 ml-7 w-2/4 border-gray-200 py-3">
                      <span className="text-right px-2 w-20">State</span>
                      <input
                        name="state"
                        onChange={(e) => setState(e.target.value)}
                        className="focus:outline-none px-3"
                        placeholder="CA"
                        required={true}

                      />
                    </label>
                    <label className="xl:w-1/4 md:ml-0 ml-10 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3">
                      <span className="text-right px-2 xl:px-0 xl:text-none">
                        ZIP
                      </span>
                      <input
                        name="postal_code"
                        onChange={(e) => setZip(e.target.value)}
                        className="focus:outline-none px-3"
                        placeholder={98603}
                        required={true}

                      />
                    </label>
                 
                  </fieldset>
                </section>

                {user.name ? (
                  <>
                    <button
                      type="submit"
                      className="submit-button mt-8 px-4 py-3 rounded-full bg-gray-800 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
                    >
                      Pay ${totalPrice} and confirm order
                    </button>
                  </>
                ) : (
                  <>
                    <button className="submit-button mt-8 px-4 py-3 rounded-full bg-gray-800 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                      Please Login to Book Order
                    </button>
                  </>
                )}
              </form>
            </div>
            <div className="rounded-md">
              <section>
                {/* <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  Payment Information
                </h2> */}
                {/* <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                    <span className="text-right px-2">Card</span>
                    <input
                      name="card"
                      className="focus:outline-none px-3 w-full"
                      placeholder="Card number MM/YY CVC"
                      required=""
                    />
                  </label>
                </fieldset> */}
              </section>
            </div>

            {/* {user.name ? (
              <>
                <button
                  type="submit"
                  className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
                >
                  Pay €846.98 and confirm order
                </button>
              </>
            ) : (
              <>
                <button className="submit-button px-4 py-3 rounded-full bg-pink-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
                  Please Login to Book Order
                </button>
              </>
            )} */}
          </div>
          <div className="col-span-1 bg-white lg:block hidden">
            <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
              Order Summary
            </h1>
            <ul className="py-6 border-b space-y-6 px-8">
              {cartitems &&
                cartitems.map((product) => {
                  return (
                    <li
                      key={product.id}
                      className="grid grid-cols-6 gap-2 border-b-1"
                    >
                      <div className="col-span-1 self-center">
                        <img
                          src={product.img}
                          alt="Product"
                          className="rounded w-full"
                        />
                      </div>
                      <div className="flex flex-col col-span-3 pt-2">
                        <span className="text-gray-600 text-md font-semi-bold">
                          {product.name}
                        </span>
                        {/* <span className="text-gray-400 text-sm inline-block pt-2">
                        Red Headphone
                      </span> */}
                      </div>
                      <div className="col-span-2 pt-3">
                        <div className="flex items-center space-x-2 text-sm justify-between">
                          {/* <span className="text-gray-400">2 x €30.99</span> */}
                          <span className="text-pink-400 font-semibold inline-block">
                            $ {product.price}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
            <div className="px-8 border-b">
              <div className="flex justify-between py-4 text-gray-600">
                <span>Subtotal</span>
                <span className="font-semibold text-pink-500">
                  ${totalPrice}
                </span>
              </div>
              <div className="flex justify-between py-4 text-gray-600">
                <span>Shipping</span>
                <span className="font-semibold text-pink-500">Free</span>
              </div>
            </div>
            <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>

        <button onClick={() => dispatch(resetState())}>reset</button>
      </>
    </>
  );
}
