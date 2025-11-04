import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.username.trim()) e.username = "Username is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email is invalid";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Password must be at least 6 characters";
    if (!form.confirmPassword) e.confirmPassword = "Please confirm password";
    else if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch({ type: 'AUTH_REQUEST' });
    try {
      const existing = await axios.get('http://localhost:3001/users', { params: { username: form.username } });
      if (existing.data && existing.data.length > 0) {
        throw new Error('Username already exists');
      }
      const res = await axios.post('http://localhost:3001/users', {
        username: form.username,
        email: form.email,
        password: form.password,
      });
      dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: 'AUTH_FAILURE', payload: err?.message || 'Registration failed' });
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 520 }}>
      <h2 className="mb-3">Create Account</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="Choose a username"
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="Enter your email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Create a password"
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <div className="mb-4">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onChange}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>
        <button className="btn btn-dark" type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
}
