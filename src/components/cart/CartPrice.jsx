import React from "react";

const CartPrice = ({ value }) => {
  const { subTotal, tax, total } = value;
  return (
    <div className="cart-page-price my-3">
      <div className="px-3 pt-3 text-center">
        <h4>Checkout</h4>
        <hr />
      </div>
      <div className="">
        <h6 className="py-2 text-center">
          <b>SubTotal :</b> ${subTotal}
        </h6>
        <h6 className="py-2 text-center">
          <b>Tax :</b> ${tax}
        </h6>
        <h6 className="py-2 text-center">
          <b>Total :</b> ${total}
        </h6>
        <div className="d-flex justify-content-center py-2">
          <button className="btn btn-success mx-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CartPrice;
