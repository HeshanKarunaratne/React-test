import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
} from "./../../actions/types";

const initialState = {
  flag: false,
  posts: [],
  errors: "",
};
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, flag: true };

    case GET_POSTS_SUCCESS:
      return { ...state, flag: false, posts: action.payload, error: "" };

    case GET_POSTS_FAILED:
      return { ...state, flag: false, error: action.payload, posts: [] };

    default:
      return state;
  }
};

export default postsReducer;
