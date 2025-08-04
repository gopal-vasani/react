import React, { useEffect, useState } from 'react'

export default function Fetch1() {

    const [state, setState] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1').then((res)=>{
            return res.json()
        )}.then((data)=>{
            setState(data)
        })
    }, [])

  return (
    <div>
      
    </div>
  )
}
