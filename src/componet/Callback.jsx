import { useCallback, useState } from "react";

const Child = React.memo(function Child({onClick}){
    console.log("Child Rendered!");
    return <button onClick={onClick}>Click Me</button>;
});
export default function parent(){
    const [count, setCount] = useState(0);
}

  // Memoized function (stable reference)
  const handleClick = useCallback(() => {
    console.log("Child button clicked!");
  }, []);

return(
    <div>
    <h1>Count :{count}</h1>
    <button onClick={()=>setCount(count + 1)}>Increase Count</button>
    <Child onClick={handleClick}/>
    </div>
)