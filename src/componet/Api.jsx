import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function API() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div >
            <ul >
                {products.map((item) => (
                    <li key={item.id}>
                        <Link to={`/ProductDetail/${item.id}`}>{item.title}</Link><br />
                        <img src={item.image} alt={item.title} width="100" />
                        <p>${item.price}</p>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default API;