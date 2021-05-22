import * as Types from "../actions/actionTypes";
import initialState from "./initialState";

export default function todoReducer(state = initialState.todos, action) {
  switch (action.type) {
    case Types.LOAD_TODO_SUCCESS:
      return action.todos;
    default:
      return state;
  }
}
