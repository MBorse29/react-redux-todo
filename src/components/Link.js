import React from "react";
import { connect } from "react-redux";
import { filter } from "../actions/todo.actions";

const Link = ({ active, children, onClick, filterTodo, filter }) => {
  console.log(children, active);
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: "4px",
        background: filterTodo === filter ? "lightgreen" : "lightgray"
      }}
    >
      {children}
    </button>
  );
};
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  filterTodo: state.filterTodo
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log("dispatch " + ownProps.filter);
    dispatch(filter(ownProps.filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
