import React from "react";
import CartItem from "./CartItem";
import CartPriceMedium from "./CartPriceMedium";
import CartPrice from "./CartPrice";

const CartList = ({ value }) => {
  const { cart } = value;

  const items = cart.map((item) => {
    return <CartItem key={item.id} item={item} value={value} />;
  });

  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="col-12 col-md-8">
          <div className="d-flex flex-column">
            {items}
            <div className="d-md-none p-0 m-0">
              <CartPrice value={value} />
            </div>
          </div>
        </div>
        <div className="col-md-4 d-md-block d-none">
          <CartPriceMedium value={value} />
        </div>
      </div>
    </div>
  );
};

export default CartList;
