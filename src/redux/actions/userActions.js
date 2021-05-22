import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall } from "./apiStatusActions";

export function createUser(user) {
  return { type: types.CREATE_USER, user };
}

export function loadUserSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userApi
      .getUsers()
      .then((users) => {
        dispatch(loadUserSuccess(users));
      })
      .catch((error) => {
        throw error;
      });
  };
}
