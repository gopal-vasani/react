import React, { useState } from 'react'

export default function Memo() {

    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    const expensiveValue = useMemo(()=>{
        console.log("Expensive Calculation Running...");

        let total = 0;
        for(let i = 0; i < 1000000000; i++){
            total = total + i;
        }

        return total;
    }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <p>Expensive Value : {expensiveValue}</p>
      <button onClick={()=>setCount(count + 1)}>Increase Count</button>
      <button onClick={()=>setCount(other + 1)}>Change Other State</button>
    </div>
  )
}
