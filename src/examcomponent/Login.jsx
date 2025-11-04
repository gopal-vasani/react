import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const from = location.state?.from?.pathname || "/";

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.username.trim()) e.username = "Username is required";
    if (!form.password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch({ type: 'AUTH_REQUEST' });
    try {
      const res = await axios.get('http://localhost:3001/users', { params: { username: form.username, password: form.password } });
      const user = res.data?.[0];
      if (!user) throw new Error('Invalid credentials');
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      navigate(from, { replace: true });
    } catch (err) {
      dispatch({ type: 'AUTH_FAILURE', payload: err?.message || 'Login failed' });
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <h2 className="mb-3">Sign In</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="Enter username"
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Enter password"
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button className="btn btn-dark" type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <p className="mt-3 text-muted">
        Demo: johndoe/password123 or janesmith/password123
      </p>
      <p className="mt-2">
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
