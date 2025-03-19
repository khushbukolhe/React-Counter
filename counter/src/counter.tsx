import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    return setCount(count + 1);
  };

  const onDecrement = () => {
    return setCount(count - 1);
  };

  return (
    <>
      <button onClick={onIncrement}> Increment</button>
      <button onClick={onDecrement}> Decrement</button>
      <h1>{count}</h1>
    </>
  );
};
