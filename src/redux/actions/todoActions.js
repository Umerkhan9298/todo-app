import * as types from "./actionTypes";
import * as todoApi from "../../api/todoApi";
import { beginApiCall } from "./apiStatusActions";

export function loadTodoSuccess(todos) {
  return { type: types.LOAD_TODO_SUCCESS, todos };
}

export function loadTodos() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return todoApi
      .getTodos()
      .then((todos) => {
        dispatch(loadTodoSuccess(todos));
      })
      .catch((error) => {
        throw error;
      });
  };
}
