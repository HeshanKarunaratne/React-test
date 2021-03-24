import { GET_POSTS } from "./../../actions/types";
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
      flag: false,
      posts: [{ title: "Test 1" }, { title: "Test 2" }, { title: "Test 3" }],
      errors: "",
    };

    const newState = postsReducer(undefined, {
      type: GET_POSTS,
      payload: [{ title: "Test 1" }, { title: "Test 2" }, { title: "Test 3" }],
    });
    expect(newState).toEqual(initialState);
  });
});
