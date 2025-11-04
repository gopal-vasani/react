// Home.jsx
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    try {
      const info = await axios.get("http://localhost:3000/data")
      setProduct(info.data)
    } catch (err) {
      console.error("Error fetching products:", err)
    }
  }

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {
        product.map((el, l) => {
          return (
            <div key={l} style={{ textAlign: 'center' }}>
              <Link to={`/${el.category}`}>
                <img src={el.img} alt={el.name || `product-${l}`} width={100} /><br />
                <h3>{el.price}</h3>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}
