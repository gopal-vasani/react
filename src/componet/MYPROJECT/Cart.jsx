// Cart.jsx
import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  const data = useSelector((store) => store || [])
  return (
    <div>
      {data && data.length ? data.map((el, i) => (
        <div key={i}>
          <img src={el.img} alt={el.name || `item-${i}`} width={100} />
          <p>Price : {el.price}</p>
          <p>Quantity: {el.quantity}</p>
        </div>
      )) : <p>Cart is empty</p>}
    </div>
  )
}
