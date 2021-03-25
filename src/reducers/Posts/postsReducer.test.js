import { GET_POSTS, GET_POSTS_SUCCESS } from "./../../actions/types";
import postsReducer from "./postsReducer";

describe("Posts Reducer", () => {
  test("should return default state", () => {
    const initialState = {
      flag: false,
      posts: [],
      errors: "",
    };
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test("should return new state if receiving type", () => {
    const initialState = {
      flag: true,
      posts: [],
      errors: "",
    };

    const newState = postsReducer(undefined, {
      type: GET_POSTS,
    });
    expect(newState).toEqual(initialState);
  });
});

// { title: "Test 1" }, { title: "Test 2" }, { title: "Test 3" }
