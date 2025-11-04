import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';


export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    if (posts.length === 0) {
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
  }, [dispatch, posts]);

  if (!posts || posts.length === 0) return <h3 className="text-center mt-4">No posts yet</h3>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">All Blog Posts</h2>
      <div className="row">
        {posts.map(post => (
          <div className="col-md-4 mb-3" key={post.id}>
            <div className="card h-100">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description.substring(0, 100)}...</p>
                <Link to={`/posts/${post.id}`} className="btn btn-dark btn-sm">Read More</Link>
              </div>
              <div className="card-footer text-muted">{post.category} | {post.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
