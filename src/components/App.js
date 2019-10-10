import React from "react";
import AddTodo from "../containers/AddTodo";
import TodoList from "../containers/TodoList";
import Footer from "../containers/Footer";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const App = () => (
  <div style={styles}>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default App;
