import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    wishlist: [],
  };

  componentDidMount() {
    this.setProducts();
  }

  // Set Initial Array of Products (Make a copy and store, not direct reference)
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  // Get product using product id
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  // Change and display correct details of product clicked
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = (id) => {
    // Make temp variable
    let tempProducts = [...this.state.products];
    // Get index of product
    const index = tempProducts.indexOf(this.getItem(id));
    // Modify necessary details of product
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    // Set new state
    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product],
      };
    });
  };

  addToWishlist = (id) => {
    // Make temp variable
    let tempProducts = [...this.state.products];
    // Get index of product
    const index = tempProducts.indexOf(this.getItem(id));
    // Modify necessary details of product
    const product = tempProducts[index];
    product.inWishlist = true;
    // Set new state
    this.setState(() => {
      return {
        products: tempProducts,
        wishlist: [...this.state.wishlist, product],
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          addToWishlist: this.addToWishlist,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
