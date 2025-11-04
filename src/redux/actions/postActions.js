import axios from 'axios';

const API_BASE = 'http://localhost:3001';

const request = () => ({ type: 'POSTS_REQUEST' });
const failure = (err) => ({ type: 'POSTS_FAILURE', payload: err?.message || 'Unknown error' });

export const fetchPosts = () => async (dispatch) => {
  dispatch(request());
  try {
    const res = await axios.get(`${API_BASE}/posts`);
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch(failure(err));
  }
};

export const addPost = (post) => async (dispatch) => {
  dispatch(request());
  try {
    const res = await axios.post(`${API_BASE}/posts`, post);
    dispatch({ type: 'ADD_POST_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch(failure(err));
    throw err;
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  dispatch(request());
  try {
    const res = await axios.put(`${API_BASE}/posts/${id}`, post);
    dispatch({ type: 'UPDATE_POST_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch(failure(err));
    throw err;
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch(request());
  try {
    await axios.delete(`${API_BASE}/posts/${id}`);
    dispatch({ type: 'DELETE_POST_SUCCESS', payload: id });
  } catch (err) {
    dispatch(failure(err));
    throw err;
  }
};
