import {
  faCartShopping,
  faGift,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[10vh] bg-white shadow-lg z-30 w-full fixed slide-down">
      <div className="flex justify-between items-center max-w-[80rem]  pl-4 m-auto">
        {/* Logo */}
        <div className="img-container flex items-center">
          <Link to={"/"}>
            <h1 className="logo font-bold text-2xl md:text-3xl text-orange-600 mb-2 md:mb-0">
              food<span className="text-black">express</span>
            </h1>
          </Link>
        </div>
        {/* nav links */}
        <nav>
          <ul className="flex p-4 space-x-4 sm:space-x-8 lg:space-x-12 text-sm md:text-[1rem]">
            <li className="p-2 font-bold text-orange-600">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "text-gray-600"
                }
              >
                <div className="flex flex-col items-center md:flex-row">
                  <FontAwesomeIcon icon={faHouse} />
                  <span className="pl-2 hover:text-orange-600">Home</span>
                </div>
              </NavLink>
            </li>
            <li className="p-2 font-bold text-orange-600">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "text-gray-600"
                }
              >
                <div className="flex flex-col items-center md:flex-row">
                  <FontAwesomeIcon icon={faGift} />
                  <span className="pl-2 hover:text-orange-600">Offers</span>
                </div>
              </NavLink>
            </li>
            {/* Remove about for small devices */}
            <li className="p-2 font-bold text-orange-600">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "text-gray-600"
                }
              >
                <div className="flex flex-col items-center md:flex-row">
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="pl-2 hover:text-orange-600">About</span>
                </div>
              </NavLink>
            </li>
            <li className="p-2 font-bold text-orange-600">
              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  isActive ? "text-orange-600" : "text-gray-600"
                }
              >
                <div className="flex flex-col items-center md:flex-row">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="pl-2 hover:text-orange-600">Cart</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="relative">
          <button>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
