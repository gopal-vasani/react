// src/examcomponent/reducers/postReducer.js
const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return { ...state, posts: action.payload };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};
