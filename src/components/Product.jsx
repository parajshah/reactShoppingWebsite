import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, inWishlist } = this.props.product;
    console.log(id, title, img, price, inCart, inWishlist);

    return (
      <div className="col-6 mx-auto col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container"
            onClick={() => console.log(`Image ${id} clicked!`)}
          >
            <Link to="/product-details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button className="btn btn-primary add-to-cart-btn">
              Add <i className="fas fa-cart-plus"></i>
            </button>
            <button className="btn add-to-wishlist-btn">
              <i className={`fa${inWishlist ? "s" : "r"} fa-heart`}></i>
            </button>
          </div>
          <div className="card-body text-center text-white">
            <h5 className="card-title">{title}</h5>
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
  }),
};
