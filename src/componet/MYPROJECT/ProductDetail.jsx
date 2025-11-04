// ProductDetail.jsx
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { myAction } from './Action'

export default function ProductDetail() {
    const [state, setState] = useState(null)
    const { category, id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        fetchApi()
    }, [category, id])

    const fetchApi = async () => {
        try {
            const info = await axios.get(`http://localhost:3000/${category}/${id}`)
            setState(info.data)
        } catch (err) {
            console.error("Error fetching product detail:", err)
        }
    }

    function AddToCart() {
        if (state) {
            dispatch(myAction(state))
            navigate("/cart")
        }
    }

    if (!state) return <div>Loading...</div>

    return (
        <div>
            <h3>{state.name}</h3>
            <img src={state.img} style={{ width: "300px" }} alt={state.name} />
            <h3>{state.price}</h3>
            <button onClick={AddToCart}>Add to Cart</button>
        </div>
    )
}
