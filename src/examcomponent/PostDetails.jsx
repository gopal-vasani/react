import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(state => state.posts.posts.find(p => p.id === parseInt(id)));

  useEffect(() => {
    if (!post) {
      const load = async () => {
        dispatch({ type: 'POSTS_REQUEST' });
        try {
          const res = await axios.get('http://localhost:3001/posts');
          dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: res.data });
        } catch (err) {
          dispatch({ type: 'POSTS_FAILURE', payload: err?.message || 'Failed to load posts' });
        }
      };
      load();
    }
  }, [dispatch, post]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p><strong>Category:</strong> {post.category}</p>
      <p><strong>Date:</strong> {post.date}</p>
      <img src={post.image} alt={post.title} className="img-fluid mt-2" />
    </div>
  );
};

export default PostDetails;
