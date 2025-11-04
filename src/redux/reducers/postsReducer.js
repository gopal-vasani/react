const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'FETCH_POSTS_SUCCESS':
      return { ...state, loading: false, posts: action.payload };

    case 'ADD_POST_SUCCESS':
      return { ...state, loading: false, posts: [...state.posts, action.payload] };

    case 'UPDATE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: state.posts.map(p => (p.id === action.payload.id ? action.payload : p)),
      };

    case 'DELETE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(p => p.id !== action.payload),
      };

    default:
      return state;
  }
}
