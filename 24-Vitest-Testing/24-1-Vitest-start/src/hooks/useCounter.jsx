import { useState } from "react";

export const useCounter = (initValue = 0) => {
  const [count, setCount] = useState(initValue);

  function increment() {
    setCount((c) => c + 1);
  }

  function decrement() {
    setCount((c) => c - 1);
  }

  function reset() {
    setCount(0);
  }

  return { count, increment, decrement, reset };
};
