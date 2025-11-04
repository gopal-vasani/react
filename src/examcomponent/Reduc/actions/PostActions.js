export const fetchPosts = () => {
  return async (dispatch) => {
    const data = [
      { id: 1, title: "Best Of Blogging", description: "Hand-picked tips to start your blogging journey.", date: new Date().toISOString().slice(0, 10), image: "https://www.blogtyrant.com/wp-content/uploads/2016/06/bestof.png", category: "Tech" },
      { id: 2, title: "Modern Web Development", description: "Explore modern tools and workflows to build on the web.", date: new Date().toISOString().slice(0, 10), image: "https://via.placeholder.com/400x200/007bff/ffffff?text=Web+Dev", category: "Web Development" },
      { id: 3, title: "Productivity for Devs", description: "Simple strategies to ship faster and stay focused.", date: new Date().toISOString().slice(0, 10), image: "https://via.placeholder.com/400x200/28a745/ffffff?text=Productivity", category: "Programming" },
    ];
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
  };
};

export const addPost = (post) => {
  return (dispatch) => {
    dispatch({ type: "ADD_POST", payload: post });
  };
};
