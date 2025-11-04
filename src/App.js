import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./examcomponent/Navbar";
import PostList from "./examcomponent/PostList";
import PostForm from "./examcomponent/PostForm";
import PostDetails from "./examcomponent/PostDetails";
import PrivateRoute from "./examcomponent/PrivateRoute";
import Login from "./examcomponent/Login";
import Register from "./examcomponent/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<PrivateRoute><PostForm /></PrivateRoute>} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PostList />} />
      </Routes>
    </>
  );
}

export default App;
