import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    wishlist: [],
    subTotal: 0,
    tax: 0,
    total: 0,
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

    // Find product for assigning new values
    const product = tempProducts[index];

    // Changes
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    // Set new state
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  addToWishlist = (id) => {
    // Make temp variable
    let tempProducts = [...this.state.products];

    // Get index of product
    const index = tempProducts.indexOf(this.getItem(id));

    // Find product for assigning new values
    const product = tempProducts[index];

    // Changes
    product.inWishlist = true;

    // Set new state
    this.setState(() => {
      return {
        products: tempProducts,
        wishlist: [...this.state.wishlist, product],
      };
    });
  };

  // Increase count of item by 1
  increment = (id) => {
    // Make temp variable
    let tempCart = [...this.state.cart];

    // Find product using id
    const selectedProduct = tempCart.find((item) => item.id === id);

    // Find index of product found
    const index = tempCart.indexOf(selectedProduct);

    // Find product for assigning new values
    const product = tempCart[index];

    // Changes
    product.count += 1;
    product.total = product.count * product.price;

    // Set new state
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Decrease count of item by 1
  decrement = (id) => {
    // Make temp variable
    let tempCart = [...this.state.cart];

    // Find product using id
    const selectedProduct = tempCart.find((item) => item.id === id);

    // Find index of product found
    const index = tempCart.indexOf(selectedProduct);

    // Find product for assigning new values
    const product = tempCart[index];

    // Check if count greater than 1
    if (product.count > 1) {
      product.count -= 1;
      product.total = product.count * product.price;
    }

    // Set new state
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Remove an Item from cart
  removeItem = (id) => {
    // Make temp variables
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    // Filter out product to be removed
    tempCart = tempCart.filter((item) => item.id !== id);

    // Find index of product
    const index = tempProducts.indexOf(this.getItem(id));

    // Find product to be removed
    const removedProduct = tempProducts[index];

    // Changes
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    // Set new state
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  // Clear Cart
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  // Find total in Cart
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => {
      return (subTotal += item.total);
    });

    // 18% Tax
    const tempTax = subTotal * 0.18;
    // Fixing upto 2 decimal places
    const tax = parseFloat(tempTax.toFixed(2));

    const tempTotal = subTotal + tax;
    // Fixing upto 2 decimal places
    const total = parseFloat(tempTotal.toFixed(2));
    this.setState(() => {
      return {
        subTotal: subTotal,
        tax: tax,
        total: total,
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
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
