import { combineReducers } from "redux";

import postsReducer from "./Posts/postsReducer";

const rootReducer = combineReducers({
  postsReducer,
});

export default rootReducer;
