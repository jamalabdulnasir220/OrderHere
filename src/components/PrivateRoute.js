import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const hasPlacedOrder = useSelector((state) => state.cart.hasPlacedOrder);

  return hasPlacedOrder ? children : <Navigate to={"/cart"} />;
};

export default PrivateRoute;
