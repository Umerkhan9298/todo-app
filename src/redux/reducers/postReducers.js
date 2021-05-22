import * as Types from "../actions/actionTypes";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case Types.LOAD_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
}
