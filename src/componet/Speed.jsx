import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Speed() {
  return (
    <div>
      <div>

      <Link to="counterf">Counterf</Link>
      <Link to="demo">Demo</Link>
      
    </div>
    <div>
      <Outlet></Outlet>
    </div>
    </div>
  )
}
