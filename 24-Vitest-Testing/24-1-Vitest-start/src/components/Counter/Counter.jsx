import { useCounter } from "../../hooks/useCounter";

function Counter() {
  const { count, increment } = useCounter();
  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
