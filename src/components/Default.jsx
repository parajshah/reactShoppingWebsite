import React from "react";
import { Link } from "react-router-dom";

const Default = () => {
  return (
    <div className="display-lg-1 text-center py-5">
      <h1 className="display-1">Page not found...</h1>
      <Link to="/" className="default-page-link display-4">
        Return to Homepage <i className="fas fa-home"></i>
      </Link>
    </div>
  );
};

export default Default;
