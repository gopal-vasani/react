import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function Fetch1() {
  const [product, setProduct] = useState([]);
  const [text, setText] = useState({ id: "", name: "", price: "" });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchApi = useCallback (async () => {
    const res = await axios.get("http://localhost:3000/data");
    setProduct(res.data);
  }, []);

  useEffect(() => {
    fetchApi();
  }, [search]);

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.id && text.name && text.price) {
      if (editId) {
        await axios.put(`http://localhost:3000/data/${editId}`, text);
        setEditId(null);
      } else {
        await axios.post("http://localhost:3000/data", text);
      }
      setText({ id: "", name: "", price: "" });
      fetchApi();
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/data/${id}`);
    fetchApi();
  };

  const handleEdit = (item) => {
    setText(item);
    setEditId(item.id);
  };

  const filteredProducts = product
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      else return b.price - a.price;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input type="number" name="id" placeholder="Enter ID" value={text.id} onChange={handleChange} />

        <input type="text" name="name" placeholder="Enter Name" value={text.name} onChange={handleChange} />

        <input type="number" name="price" placeholder="Enter Price" value={text.price} onChange={handleChange} />

        <button type="submit">{editId ? "Update" : "Add"} Product</button>

      </form>

      <input type="text" placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ marginRight: "10px" }} />

      <button
        onClick={() =>
          setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        }
      >
        Sort by Price ({sortOrder === "asc" ? "Low → High" : "High → Low"})
      </button>

      <ul>
        {filteredProducts.map((item) => (
          <li key={item.id}>
            {item.id} <br /> {item.name} <br />₹{item.price}{" "}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}