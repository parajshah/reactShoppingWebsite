import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../icon.ico";

const Navbar = (props) => {
  return (
    <nav className="nav navbar-expand-sm navbar-dark bg-primary justify-content-between align-items-center p-2 sticky-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <Link className="d-sm-none d-block" to="/cart">
        <button className="btn">
          <i className="fas fa-cart-plus"></i> Cart
        </button>
      </Link>

      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav">
          {/* <li
            className={`nav-item d-md-block d-none ${
              props.location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li> */}
          <li className="nav-item ml-sm-auto">
            <form className="d-flex align-items-center">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn my-2" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </li>
          <li
            className={`nav-item  ${
              props.location.pathname === "/cart" ? "active" : ""
            }`}
          >
            <Link className="nav-link d-none d-sm-block" to="/cart">
              <button className="btn">
                <i className="fas fa-cart-plus"></i> Cart
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
