import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, inWishlist } = this.props.product;

    return (
      <div className="col-6 mx-auto col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              // Image container with 2 buttons (Cart, Wishlist)
              <div
                className="img-container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/product-details">
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="btn btn-primary add-to-cart-btn"
                  onClick={() => {
                    value.addToCart(id);
                  }}
                  disabled={inCart ? true : false}
                >
                  {inCart ? (
                    "In Cart"
                  ) : (
                    <span>
                      <i className="fas fa-cart-plus"></i>
                    </span>
                  )}
                </button>
                <button
                  className="btn add-to-wishlist-btn"
                  onClick={() => {
                    value.addToWishlist(id);
                  }}
                  disabled={inWishlist ? true : false}
                >
                  {inWishlist ? (
                    <span className="m-0">
                      <i className="fas fa-heart inWishlist" />
                    </span>
                  ) : (
                    <span className="m-0">Add to Wishlist</span>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* Title & Price */}
          <div className="card-body text-center text-white">
            <h6 className="card-title">{title}</h6>
            <p className="m-0">Rate: ${price}</p>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
    inWishlist: PropTypes.bool,
  }).isRequired,
};
