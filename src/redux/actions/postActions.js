import * as types from "./actionTypes";
import * as postApi from "../../api/postApi";

export function loadPostSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts };
}

export function loadPosts() {
  return function (dispatch) {
    return postApi
      .getPosts()
      .then((posts) => {
        dispatch(loadPostSuccess(posts));
      })
      .catch((error) => {
        throw error;
      });
  };
}
