import React from "react";
import CartDetails from "./CartDetails";

const CartItem = ({ value, item }) => {
  return <CartDetails item={item} value={value} />;
};

export default CartItem;
