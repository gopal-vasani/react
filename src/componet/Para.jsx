import React, { useCallback, useState } from 'react'

// function Child({onClick}){
//     console.log("child render")
//     return <button onClick={onClick}> Update</button>
// }

// const Child = React.memo(({onClick})=>{

//     console.log("child render")
//     return <button onClick={onClick}> Update</button>

// })

function expensiveCal(num){
    console.log("cal");
    for(var i = 1; i < 10000000; i++){}
    return num*2
}


export default function Para() {

    const [count, setCount] = useState(0)
    const [other, setOther] = useState(0)

//     const Inc = ()=>{setCount(count + 1)}
//   return (

    // const Inc = useCallback(()=>{
    //     setCount ((prev)=>prev + 1)
    // },[])

    const double=useMemo(()=>expensiveCal(count), [count])

    return(
    <div>

        <p>Count Is {count}</p>
        <button onClick={(()=>{setOther(other + 1)})}>Click</button>
        <Child onClick = {Inc}/>
      
    </div>
  )
}
