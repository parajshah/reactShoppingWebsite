import React from "react";
import { ProductConsumer } from "../context";
import CartList from "./CartList";
import Title from "./Title";

const Cart = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { cart } = value;
        if (cart.length > 0) {
          return (
            <div className="container-fluid">
              <div className="row py-5 d-flex justify-content-center">
                <Title name="Your" title="Cart" />
                <CartList value={value} />
              </div>
            </div>
          );
        } else {
          return (
            <div className="container-fluid">
              <div className="row py-5 d-flex justify-content-center">
                <Title name="Cart is" title="Empty :(" />
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Cart;
