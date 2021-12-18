import React, { useState } from "react";

export const PreviousState = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const substract = () => {
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
      </div>
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};
