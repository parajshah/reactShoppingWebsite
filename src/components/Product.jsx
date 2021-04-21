import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    console.log(id, title, img, price, inCart);
    return (
      <div className="col-6 mx-auto col-lg-3 my-3">
        <div className="card">
          <Link to="/product-details">
            <div
              className="img-container"
              onClick={() => console.log(`Image ${id} clicked!`)}
            >
              <img src={img} alt="product" className="card-img-top" />
            </div>
            <div className="card-body text-center text-white">
              <h5 className="card-title">{title}</h5>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
