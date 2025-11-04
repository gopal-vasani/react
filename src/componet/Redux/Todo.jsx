import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { myAction } from './Action'


export default function Todo() {
  const [state, setState] = useState('')

  const dispatch = useDispatch()
  
  function AddText(e) {
    setState(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(myAction(state))
  }


  return (
    <div>
      <h1>Toodo </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter data' onChange={AddText} />
        <input type="submit" />
      </form>
    </div>
  )
}


