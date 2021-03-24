import { GET_POSTS } from "./../../actions/types";

const initialState = {
  flag: false,
  posts: [],
  errors: "",
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

export default postsReducer;
