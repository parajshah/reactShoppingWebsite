import React from "react";

export default function Title({ name, title }) {
  return (
    <React.Fragment>
      <h1 className="text-capitalize font-weight-bold text-center">
        {name} <strong className="main-title">{title}</strong>
      </h1>
    </React.Fragment>
  );
}
