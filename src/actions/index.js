import * as Types from "./types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: Types.GET_POSTS });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    dispatch({ type: Types.GET_POSTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: Types.GET_POSTS_FAILED, payload: e.message });
  }
};
