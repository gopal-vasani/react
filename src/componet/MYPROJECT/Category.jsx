// Category.jsx
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Category() {
    const [product, setProduct] = useState([])
    const { category } = useParams()

    useEffect(() => {
        fetchApi()
    }, [category])


    const fetchApi = async () => {
        try {
            const info = await axios.get(`http://localhost:3000/${category}`)
            setProduct(info.data)
        } catch (err) {
            console.error("Error fetching category data:", err)
        }
    }
    return (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {
                product.map((el, i) => {
                    return (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <Link to={`/${el.category}/${el.id}`}>
                                <img src={el.img} width={100} alt={el.name || `prod-${i}`} />
                                <h3>{el.price}</h3>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
