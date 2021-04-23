import React from "react";

const Counter = ({ Value, item }) => {
  const { id, count } = item;
  const { increment, decrement } = Value;

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button
        className="decrement btn"
        onClick={() => decrement(id)}
        disabled={count === 1 ? true : false}
      >
        -
      </button>
      <span className="btn mx-2 mx-md-3 font-weight-bold">{count}</span>
      <button className="increment btn" onClick={() => increment(id)}>
        +
      </button>
    </div>
  );
};

export default Counter;
