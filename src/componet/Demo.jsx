import React, { useState } from "react";

function Demo() {
    // Array of product objects
    const [products, setProducts] = useState([
        { id: 1, name: "Mobile", price: 150, image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6487/6487480_sd.jpg" },
        { id: 2, name: "Laptop", price: 500, image: "https://p4-ofp.static.pub//fes/cms/2025/06/09/rzx1vjodhuhbacc1btsrj85uhocghm157825.png" },
        { id: 3, name: "Pen", price: 50, image: "https://via.placeholder.com/50?text=Pen" },
        { id: 4, name: "Book", price: 120, image: "https://via.placeholder.com/50?text=Book" },
    ]);

    const filteredProducts = products.filter((product) => product.price > 100);

    return (
        <>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src={product.image} alt={product.name} width={50} height={50} />
                        <span>{product.name} - ₹{product.price}</span>
                    </li>
                ))}
            </ul>
            <button onClick={() => {
                const newId = products.length + 1;
                setProducts([
                    ...products,
                    {
                        id: newId,
                        name: `Product${newId}`,
                        price: 100 + newId * 10,
                        image: `https://via.placeholder.com/50?text=Product${newId}`
                    }
                ]);
            }}>
                Product Add
            </button>
        </>
    );
}

export default Demo;