import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          title,
          company,
          info,
          price,
          img,
          inCart,
          inWishlist,
          availability,
        } = value.detailProduct;
        return (
          <div className="container">
            <div className="row">
              {/* Title for medium screens and larger */}
              <div className="col-12 mx-auto text-center pt-3 pb-0 d-none d-md-block">
                <h1>{title}</h1>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mx-auto col-md-6 my-3">
                {/* Image */}
                <img src={img} alt="product" className="img-fluid" />
              </div>
              <div className="col-12 mx-auto col-md-6 pb-5 pb-md-0 d-flex flex-column justify-content-center text-capitalize text-md-left">
                {/* Details & Title upto medium screens */}
                <div className="text-center pt-3 pb-0 d-block d-md-none">
                  <h1>{title}</h1>
                  <hr />
                </div>
                <h5 className="py-2">
                  <b>Company :</b> {company}
                </h5>
                <h5 className="py-2">
                  <b>Availability :</b>{" "}
                  {availability ? "In Stock" : "Out of stock"}
                </h5>
                <h5 className="py-2">
                  <b>Price :</b> ${price}
                </h5>
                <h5 className="py-2">
                  <b>Shipping Charge :</b> free
                </h5>
                <div className="d-flex justify-content-left align-items-center">
                  {/* Add to cart, wishlist buttons */}
                  <button
                    className="btn btn-primary cart-btn"
                    onClick={() => {
                      value.addToCart(id);
                    }}
                    disabled={inCart ? true : false}
                  >
                    {inCart ? (
                      "In Cart"
                    ) : (
                      <span>
                        Add to cart <i className="fas fa-cart-plus"></i>
                      </span>
                    )}
                  </button>
                  <button
                    className="btn ml-3 wishlist-btn"
                    onClick={() => {
                      value.addToWishlist(id);
                    }}
                    disabled={inWishlist ? true : false}
                  >
                    {inWishlist ? (
                      <p className="m-0">
                        In Wishlist <i className="fas fa-heart" />
                      </p>
                    ) : (
                      <p className="m-0">Add to Wishlist</p>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="row mx-auto mt-3">
              <div className="product-desctiption">
                {/* Description heading */}
                <div className="text-center text-md-left">
                  <h4>
                    <b>Description</b>
                  </h4>
                </div>
                <hr />
                {/* Description content */}
                <div>
                  <p>{info}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default ProductDetails;
