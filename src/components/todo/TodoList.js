import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TodoList = ({ todos }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Todos</th>
        <th>User</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todo) => {
        return (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.userName}</td>
            <td>
              <Link to={"/todo/" + todo.id} className="btn btn-primary">
                Show Post
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoList;
