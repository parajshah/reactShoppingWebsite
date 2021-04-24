import React from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import Title from "../Title";
import WishlistItems from "./WishlistItems";

const Wishlist = () => {
  return (
    <React.Fragment>
      <ProductConsumer>
        {(value) => {
          const { wishlist } = value;
          if (wishlist.length > 0) {
            return (
              <div className="container-fluid">
                <div className="row py-5 d-flex justify-content-center">
                  <Title name="Your" title="Wishlist" />
                  <WishlistItems value={value} />
                </div>
              </div>
            );
          } else {
            return (
              <div className="container-fluid">
                <div className="row py-5 justify-content-center">
                  <Title name="Wishlist" title="Empty :(" />
                </div>
                <div className="row justify-content-center">
                  <h1 className="display-5">
                    <Link to="/">Add something!</Link>
                  </h1>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    </React.Fragment>
  );
};

export default Wishlist;
