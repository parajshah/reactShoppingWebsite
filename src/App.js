// React libraries
import React from "react";
import { Route, Switch } from "react-router-dom";

// Css files
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/product-details" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
