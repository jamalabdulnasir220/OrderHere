import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  if (!cartItems || cartItems.length === 0)
    return (
      <div className="flex flex-col items-center justify-center p-4 pt-[12rem] md:pt-[7rem]">
        <img
          alt="empty-cart"
          src="https://cdn.dribbble.com/users/887568/screenshots/3172047/media/35159a4a9ba57200e5e17119ffd945e6.gif"
          className="w-[24rem] md:w-[36rem] bounce-down"
        />
        <div className="flex -mt-6">
          <Link to="/">
            <button className="btn-bounce delay-1 bg-black text-white font-bold py-2 px-3 rounded-lg shadow-md shadow-gray-500 text-sm md:text-lg mr-6">
              Add items to cart
            </button>
          </Link>
          <Link to="/">
            <button className="btn-bounce delay-2 bg-orange-600 text-white font-bold py-2 px-3 rounded-lg shadow-md shadow-gray-400 text-sm md:text-lg">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );

  return (
    <div className="pt-[5rem]">
      <div className="flex lg:mx-20 m-auto flex-col-reverse lg:flex-row lg:justify-around justify-center p-4 slide-right">
        <div className="lg:w-[60%] lg:mt-4 mt-16 lg:mb-0 mb-10 slide-left">
          {/* Account information */}
          <div className="flex items-center">
            <img
              alt="user"
              src="https://cdn-icons-png.flaticon.com/512/8792/8792047.png"
              className="lg:w-20 w-16 pl-2 lg:pl-0 lg:left-[5.5rem] absolute z-10"
            />
            <div className="border-t border-gray-300 px-4 py-4 shadow-xl shadow-gray-300 w-full h-[10rem] rounded-lg">
              <div className="ml-16 mt-2 mr-4">
                <h1 className="font-bold mb-2">ACCOUNT INFORMATION</h1>
                <div className="bg-gray-400 h-[1px] mb-2"></div>
                {loggedInUser === "Guest" ? (
                  <div className="mt-2">
                    <p className="text-sm text-red-500 font-bold">
                      Please log in now, to place your order !
                    </p>
                    <button className="login-button px-6 pb-2 pt-1 mt-2 mr-4 shadow-md shadow-gray-600">
                      <span className="button-content font-bold">
                        Login{" "}
                        <span className="pl-1">
                          Now{" "}
                          <FontAwesomeIcon
                            icon={faAngleRight}
                            className="pl-2"
                          />{" "}
                        </span>
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="mt-3">
                    <h1 className="text-gray-500 font-bold">
                      <span className="font-bold text-orange-600">Name : </span>
                      {loggedInUser}
                    </h1>
                    <h1 className="text-gray-500 font-bold">
                      <span className="font-bold text-orange-600">
                        E-mail :{" "}
                      </span>
                      xxxxxxx@gmail.com
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Delivery Address Form */}
          <div className="flex items-center fade-in-second">
            <img
              alt="address"
              src="https://cdn-icons-png.flaticon.com/512/8568/8568340.png"
              className="lg:w-20 w-16 pl-2 lg:pl-0 lg:left-[5.5rem] absolute z-10 bg-white"
            />
            <div className="border-t border-gray-300 shadow-xl shadow-gray-300 p-4 rounded-lg w-full h-[11rem] mt-6">
              <div className="ml-16 mr-4">
                <h1 className="font-bold mb-2">ADD YOUR DELIVERY ADDRESS</h1>
                <form>
                  <div className="flex">
                    <input className="bg-zinc-200 w-full p-2 border rounded-md"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
