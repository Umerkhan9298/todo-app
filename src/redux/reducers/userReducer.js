import * as Types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case Types.CREATE_USER:
      return [...state, { ...action.user }];
    case Types.LOAD_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
