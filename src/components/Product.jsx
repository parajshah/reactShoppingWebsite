import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, inWishlist } = this.props.product;
    // console.log(id, title, img, price, inCart, inWishlist);

    return (
      <div className="col-6 mx-auto col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
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
                    <p className="m-0">
                      <i className="fas fa-heart" />
                    </p>
                  ) : (
                    <p className="m-0">Add to Wishlist</p>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
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
