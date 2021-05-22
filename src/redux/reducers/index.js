import { combineReducers } from "redux";
import users from "./userReducer";
import todos from "./todoReducer";
import posts from "./postReducers";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  users,
  todos,
  posts,
  apiCallsInProgress,
});

export default rootReducer;
