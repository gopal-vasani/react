const initialState = {
  isAuthenticated: false,
  currentUser: null,
  loading: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return { ...state, loading: true, error: null };
    case 'AUTH_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, isAuthenticated: true, currentUser: action.payload };

    case 'REGISTER_SUCCESS':
      return { ...state, loading: false, isAuthenticated: true, currentUser: action.payload };

    case 'LOGOUT':
      return { ...state, isAuthenticated: false, currentUser: null };

    default:
      return state;
  }
}
