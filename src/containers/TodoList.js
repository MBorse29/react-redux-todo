import React from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todo.actions";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul style={{ width: 100, margin: "20px auto" }}>
      {todos != null &&
        todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
  );
};

const filterTodos = (todos, filter) => {
  console.log(todos);
  switch (filter) {
    case "SHOW_COMPLETE":
      return todos.filter(todo => todo.complete === true);
    case "SHOW_ACTIVE":
      return todos.filter(todo => todo.complete === false);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: filterTodos(state.todos, state.filterTodo)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
