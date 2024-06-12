import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emptycart from "../assets/images/emptycart.png";

export default function Cart() {
  const products = useSelector((state) => state.cart.cartItems);

  const allprice = products.map((data) => Number(data.price));
  const totalPrice = allprice.reduce((a, b) => a + b, 0);

  return (
    <>
      {products.length ? (
        <>
          <div className="h-screen bg-gray-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {products &&
                  products.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                      >
                        <img
                          src={product.img}
                          alt="product-image"
                          className="w-full rounded-lg sm:w-40"
                        />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                          <div className="mt-5 sm:mt-0">
                            <h2 className="text-lg font-bold text-gray-900">
                              {product.name}
                            </h2>
                          </div>
                          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div className="flex items-center space-x-4">
                              <p className="text-sm mt-8">{product.price} $</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {/* Sub total */}
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">${totalPrice}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">0 $</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">${totalPrice} USD</p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <Link to={`/checkout`}>
                  <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                    Check out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <img src={emptycart} alt="" />
          </div>
          <h1 className="mb-10 text-center text-2xl font-bold mt-8">
            {" "}
            Your Cart is Empty
          </h1>
        </>
      )}
    </>
  );
}
