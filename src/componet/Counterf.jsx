// Counter Using UseState
// ----------------------

import React, { useState } from "react";

function Counterf() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Using Function</h1>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counterf;

// ------------------------------------------------------------------
// Counter Using UseEffect
// -----------------------

// import React, { useState, useEffect } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const savedCount = localStorage.getItem("count");
//     if (savedCount) {
//       setCount(Number(savedCount));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("count", count);
//   }, [count]);

//   const increment = () => setCount(count + 1);

//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   const reset = () => setCount(0);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Using Function with useEffect</h1>
//       <h2>Count: {count}</h2>

//       <button onClick={increment}>Increment</button>{" "}
//       <button onClick={decrement}>Decrement</button>{" "}
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;
