import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Action";


function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Using Normal Redux</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>Decrement</button>{" "}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
