// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// export default function ProductInfo() {
//     const [state, setState] = useState({})
//     const { category, id } = useParams()

//     useEffect(() => {
//         fetchApi()
//     }, [category, id])

//     const fetchApi = async () => {
//         try {
//             const info = await axios.get(`http://localhost:3000/${category}/${id}`)

//             setState(info.data)
//         } catch (err) {
//             console.error("Error fetching product info:", err)
//         }
//     }

//     return (
//         <div>
//             <img src={state.img} alt={state.name || "product"} />
//             <h2>{state.name}</h2>
//             <p>Price: {state.price}</p>
//         </div>
//     )
// }
