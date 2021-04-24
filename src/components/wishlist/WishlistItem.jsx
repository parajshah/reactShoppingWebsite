import React from "react";

const WishlistItem = ({ value, wishlistItem }) => {
  const { removeWishlistItem } = value;
  return (
    <div className="cart-page-details my-3">
      <div className="row p-3">
        {/* Image */}
        <div className="col-5">
          <img
            src={wishlistItem.img}
            alt="product"
            className="img-fluid mb-3"
          />
        </div>
        {/* Details */}
        <div className="col-7">
          <div className="row text-center">
            <div className="col-12">
              <h4 className="pl-2">{wishlistItem.title}</h4>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h6 className="py-2">
                <b>Company :</b> {wishlistItem.company}
              </h6>
              <h6 className="py-2">
                <b>Availability :</b>{" "}
                {wishlistItem.availability ? "In Stock" : "Out of stock"}
              </h6>
              <h6 className="py-2">
                <b>Price :</b> ${wishlistItem.price}
              </h6>
              <h6 className="py-2">
                <b>Shipping Charge :</b> free
              </h6>
              <h6 className="py-2">
                <b>Item Total :</b> ${wishlistItem.total}
              </h6>
              <div className="d-flex">
                <button
                  className="btn btn-danger mr-2"
                  onClick={() => removeWishlistItem(wishlistItem.id)}
                >
                  Remove <i className="fas fa-trash"></i>
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    value.addToCart(wishlistItem.id);
                  }}
                  disabled={wishlistItem.inCart ? true : false}
                >
                  {wishlistItem.inCart ? (
                    "In Cart"
                  ) : (
                    <span>
                      Add to Cart <i className="fas fa-cart-plus"></i>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
