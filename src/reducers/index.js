import { combineReducers } from "redux";

import postReducer from "./Posts/postsReducer";

const rootReducer = combineReducers({
  postReducer,
});

export default rootReducer;
