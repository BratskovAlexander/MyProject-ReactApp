import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <ul>
      {props.todo.map((todo, idx) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            idx={idx + 1}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}
