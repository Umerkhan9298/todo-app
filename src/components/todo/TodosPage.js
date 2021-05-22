import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import * as todoActions from "../../redux/actions/todoActions";
import * as postActions from "../../redux/actions/postActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import TodoList from "./TodoList";
import Spinner from "../common/Spinner";

const TodosPage = (props) => {
  useEffect(() => {
    if (props.users.length === 0) {
      props.actions.loadUsers().catch((error) => {
        alert("Loading users failed!" + error);
      });
    }

    if (props.todos.length === 0) {
      props.actions.loadTodos().catch((error) => {
        alert("Loading todos failed!" + error);
      });
    }

    if (props.posts.length === 0) {
      props.actions.loadPosts().catch((error) => {
        alert("Loading posts failed!" + error);
      });
    }
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {props.users.length === 0 ? (
        <Spinner />
      ) : (
        <TodoList todos={props.todos} />
      )}
    </div>
  );
};

TodosPage.propTypes = {
  users: PropTypes.array.isRequired,
  todos: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    todos:
      state.todos.length === 0
        ? []
        : state.todos.map((todo) => {
            return {
              ...todo,
              userName: state.users.find((u) => u.id === todo.userId).name,
            };
          }),
    users: state.users,
    posts: state.posts,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUsers: bindActionCreators(userActions.loadUsers, dispatch),
      loadTodos: bindActionCreators(todoActions.loadTodos, dispatch),
      loadPosts: bindActionCreators(postActions.loadPosts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
