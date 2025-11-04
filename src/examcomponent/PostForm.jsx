import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function PostForm() {
  const [form, setForm] = useState({ title: "", description: "", category: "", image: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.description) return alert("Title & Description required!");
    const save = async () => {
      dispatch({ type: 'POSTS_REQUEST' });
      try {
        const payload = { ...form, date: new Date().toISOString().slice(0, 10) };
        const res = await axios.post('http://localhost:3001/posts', payload);
        dispatch({ type: 'ADD_POST_SUCCESS', payload: res.data });
        navigate("/");
      } catch (err) {
        dispatch({ type: 'POSTS_FAILURE', payload: err?.message || 'Failed to add post' });
      }
    };
    save();
  };

  return (
    <div className="container mt-4">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <input type="text" name="title" placeholder="Title" className="form-control mb-2" value={form.title} onChange={handleChange} />
        <textarea name="description" placeholder="Description" className="form-control mb-2" value={form.description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" className="form-control mb-2" value={form.category} onChange={handleChange} />
        <input type="text" name="image" placeholder="Image URL" className="form-control mb-2" value={form.image} onChange={handleChange} />
        <button type="submit" className="btn btn-dark">Add Post</button>
      </form>
    </div>
  );
}
