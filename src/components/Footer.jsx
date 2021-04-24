import React from "react";
import { withRouter } from "react-router-dom";
import { ProductConsumer } from "../context";

const Footer = (props) => {
  return (
    <ProductConsumer>
      {(value) => {
        let cartIsEmpty = true;
        let wishlistIsEmpty = true;
        const { cart, wishlist } = value;
        const currentPage = props.location.pathname;

        if (cart.length > 0) {
          cartIsEmpty = false;
        } else {
          cartIsEmpty = true;
        }
        if (wishlist.length > 0) {
          wishlistIsEmpty = false;
        } else {
          wishlistIsEmpty = true;
        }

        if (currentPage == "/wishlist") {
          return (
            <footer
              className={`text-center bg-primary ${
                wishlistIsEmpty ? "d-none" : "d-block"
              }`}
            >
              {/* Icons */}
              <div className="container p-4">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.instagram.com/paraj_shah/"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/in/paraj-shah/"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://github.com/parajshah"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
                <h5 className="pt-3">&copy; 2021 Copyright</h5>
                <h5 className="text-white">Paraj Shah</h5>
              </div>
            </footer>
          );
        } else if (currentPage == "/cart") {
          return (
            <footer
              className={`text-center bg-primary ${
                cartIsEmpty ? "d-none" : "d-block"
              }`}
            >
              {/* Icons */}
              <div className="container p-4">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.instagram.com/paraj_shah/"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://www.linkedin.com/in/paraj-shah/"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="https://github.com/parajshah"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
                <h5 className="pt-3">&copy; 2021 Copyright</h5>
                <h5 className="text-white">Paraj Shah</h5>
              </div>
            </footer>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default withRouter(Footer);
