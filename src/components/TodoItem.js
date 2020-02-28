import React from "react";
import "./../App.css";

function TodoItem({ todos, todoCompleted }) {
  return (
    <li className="item">
      <span className={todos.completed ? "done" : null}>
        <input
          type="checkbox"
          checked={todos.completed}
          onChange={todoCompleted.bind(null, todos)}
        />
        {todos.title}
      </span>
    </li>
  );
}

export default TodoItem;
