import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div>

      <div>

        <Link to='/Counterc'>Counterc</Link>
        <Link to='/Todo'>Todo</Link>
        <Link to='/Multi'>Multi</Link>
        <Link to='/Speed' >Speed</Link>


      </div>

    </div>
  )
}
