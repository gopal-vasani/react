import axios from 'axios';

const API_BASE = 'http://localhost:3001';

const request = () => ({ type: 'AUTH_REQUEST' });
const failure = (err) => ({ type: 'AUTH_FAILURE', payload: err?.message || 'Unknown error' });

export const login = (username, password) => async (dispatch) => {
  dispatch(request());
  try {
    const res = await axios.get(`${API_BASE}/users`, { params: { username, password } });
    const user = res.data[0];
    if (!user) {
      throw new Error('Invalid credentials');
    }
    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
  } catch (err) {
    dispatch(failure(err));
    throw err;
  }
};

export const register = (userData) => async (dispatch) => {
  dispatch(request());
  try {
    // Ensure username/email are unique
    const existing = await axios.get(`${API_BASE}/users`, { params: { username: userData.username } });
    if (existing.data && existing.data.length > 0) {
      throw new Error('Username already exists');
    }
    const res = await axios.post(`${API_BASE}/users`, userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch(failure(err));
    throw err;
  }
};

export const logout = () => ({ type: 'LOGOUT' });
