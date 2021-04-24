import React from "react";
import Counter from "./Counter";

const CartItem = ({ value, item }) => {
  const { removeItem } = value;
  return (
    <div className="cart-page-details my-3">
      <div className="row p-3">
        {/* Image */}
        <div className="col-5">
          <img src={item.img} alt="product" className="img-fluid mb-3" />
          <Counter Value={value} item={item} />
        </div>
        {/* Details */}
        <div className="col-7">
          <div className="row text-center">
            <div className="col-12">
              <h4 className="pl-2">{item.title}</h4>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h6 className="py-2">
                <b>Company :</b> {item.company}
              </h6>
              <h6 className="py-2">
                <b>Availability :</b>{" "}
                {item.availability ? "In Stock" : "Out of stock"}
              </h6>
              <h6 className="py-2">
                <b>Price :</b> ${item.price}
              </h6>
              <h6 className="py-2">
                <b>Shipping Charge :</b> free
              </h6>
              <h6 className="py-2">
                <b>Item Total :</b> ${item.total}
              </h6>
              <button
                className="btn btn-danger py-2"
                onClick={() => removeItem(item.id)}
              >
                Remove <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
