import React from 'react'

export default function Prodect() {
  return (
    <div>

        <h1>Product</h1>

        <div>

            <Link>Electronic</Link>
            <Link>Jewellery</Link>

        </div>

        <div>

            <Outlet></Outlet>

        </div>
      
    </div>
    
  )
}
