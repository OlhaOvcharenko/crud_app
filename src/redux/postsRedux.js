//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const READ_MORE = createActionName('READ_MORE');

// action creators


const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;