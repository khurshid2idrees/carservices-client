import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../features/cartSlice";

export default function OrderDetails() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.cart.user);
  const orders = useSelector((state) => state.cart.orders);
  const orderStatus = useSelector((state) => state.cart.loading);
  const error = useSelector((state) => state.cart.error);

  const cartitems = useSelector((state) => state.cart.cartItems);

  const { cart } = orders[0];

  const allprice = cart.map((data) => Number(data.price) * data.quantity);
  const totalPrice = allprice.reduce((a, b) => a + b, 0);

  console.log(cart);

  useEffect(() => {
    if (user.name) {
      dispatch(fetchOrders(user._id));

      console.log(orders, "done bro");
    }
  }, [dispatch, user]);

  if (orderStatus === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col">
          <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            {/* Order #13432 */} My Orders
          </h1>
          {orders.legth === 0 ? (
            <p className="text-base dark:text-gray-300 font-medium leading-6">
              No orders found
            </p>
          ) : (
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                  <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                    {/* Customer’s Cart */}
                  </p>

                  {cart &&
                    cart.map((data) => {
                      return (
                        <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                          <div className="">
                            <img
                              className="w-full  block"
                              src={data.img}
                              alt="dress"
                            />
                          </div>
                          <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                {data.name}
                              </h3>
                            </div>
                            <div className="flex justify-between space-x-8 items-start w-full">
                              <p className="text-base dark:text-white xl:text-lg leading-6">
                                $ {data.price * data.quantity}
                              </p>
                              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                                {data.quantity} (qty.)
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                  <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                      Summary
                    </h3>
                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                      <div className="flex justify-between w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                          Subtotal
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                          ${totalPrice}
                        </p>
                      </div>

                      <div className="flex justify-between items-center w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                          Shipping
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                          $ 0
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                        Total
                      </p>
                      <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                        $ {totalPrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                      Shipping
                    </h3>
                    <div className="flex justify-between items-start w-full">
                      <div className="flex justify-center items-center space-x-4">
                        <div className="w-8 h-8">
                          <img
                            className="w-full h-full"
                            alt="logo"
                            src="https://i.ibb.co/L8KSdNQ/image-3.png"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-center">
                          <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                            DPD Delivery
                            <br />
                            <span className="font-normal">
                              Delivery with 24 Hours
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
                        $0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                  My Profile
                </h3>
                <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                  <div className="flex flex-col justify-start items-start flex-shrink-0">
                    <div className="flex w-16 justify-center  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                      <div className="flex justify-start items-start flex-col space-y-2">
                        <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                          David Kent
                        </p>
                        <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                          10 Previous Orders
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 7L12 13L21 7"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="cursor-pointer text-sm leading-5 ">
                        david89@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                    <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                      <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                        <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                          Shipping Address
                        </p>
                        <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                          180 North King Street, Northhampton MA 1060
                        </p>
                      </div>
                      <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                        <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                          Billing Address
                        </p>
                        <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                          180 North King Street, Northhampton MA 1060
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {}
      </div>
    </>
  );
}
