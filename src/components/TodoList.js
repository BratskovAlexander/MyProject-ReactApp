import React from "react";
import "./../App.css";
import TodoItem from "./TodoItem";

function TodoList({ todos, todoCompleted, deleteTodo }) {
  return (
    <>
      <ul className="list">
        <TodoItem todos={todos} todoCompleted={todoCompleted} />
      </ul>
    </>
  );
}

export default TodoList;
