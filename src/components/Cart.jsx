import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emptycart from "../assets/images/emptycart.png";
import { updateCartQuantity, removeFromCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

export default function Cart() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart.cartItems);

  const allprice = products.map((data) => Number(data.price) * data.quantity);
  const totalPrice = allprice.reduce((a, b) => a + b, 0);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateCartQuantity({ id, quantity: Number(quantity) }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {products.length ? (
        <>
          <div
            className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90  overflow-y-auto overflow-x-hidden fixed sticky-0"
            id="chec-div"
          >
            <div
              className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div
                className="flex items-end lg:flex-row flex-col justify-center"
                id="cart"
              >
                <div
                  className=" md:w-8/12 w-full lg:px-8 lg:py-14 px-4 md:py-8 py-4 bg-white dark:bg-gray-800  overflow-x-hidden lg:h-screen h-auto"
                  id="scroll"
                >
                  <div
                    className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer"
                    onclick="checkoutHandler(false)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">
                      Back
                    </p>
                  </div>
                  <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">
                    Cart
                  </p>
                  {products.map((product) => {
                    return (
                      <div className="md:flex items-strech py-8 md:py-10 lg:py-8  border-b border-black">
                        <div className="md:w-4/12 2xl:w-1/4 w-full ">
                          <img
                            src={product.img}
                            alt="Black Leather Bag"
                            className="h-full object-center object-cover md:block hidden"
                          />
                          <img
                            src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg"
                            alt="Black Leather Bag"
                            className="md:hidden w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center ">
                          <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
                            RF293
                          </p>
                          <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-xl font-semibold font-black leading-none text-gray-800 dark:text-white">
                              {product.name}
                            </p>
                            <select
                              value={product.quantity}
                              onChange={(e) =>
                                handleQuantityChange(product.id, e.target.value)
                              }
                              aria-label="Select quantity"
                              className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                            >
                              <option value={"1"}>01</option>
                              <option value={"2"}>02</option>
                              <option value={"3"}>03</option>
                            </select>
                          </div>
                          {/* <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">
                    Height: 10 inches
                  </p>
                  <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                    Composition: 100% calf leather
                  </p> */}
                          <div className="flex items-center justify-between pt-5">
                            <div className="flex itemms-center">
                              {/* <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">
                        Add to favorites
                      </p> */}
                              <p
                                onClick={() => handleRemoveFromCart(product.id)}
                                className="text-base leading-3 underline text-red-500 pl-5 cursor-pointer"
                              >
                                Remove
                              </p>
                            </div>
                            <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                              ${product.price * product.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
                  <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                    <div>
                      <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                        Summary
                      </p>
                      <div className="flex items-center justify-between pt-16">
                        <p className="text-base leading-none text-gray-800 dark:text-white">
                          Subtotal
                        </p>
                        <p className="text-base leading-none text-gray-800 dark:text-white">
                          ${totalPrice}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-16">
                        <p className="text-base leading-none text-gray-800 dark:text-white">
                          Shipping
                        </p>
                        <p className="text-base leading-none text-gray-800 dark:text-white">
                          0
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800 dark:text-white">
                          Total
                        </p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                          ${totalPrice}
                        </p>
                      </div>
                      <Link to={`/checkout`}>
                        <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
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
