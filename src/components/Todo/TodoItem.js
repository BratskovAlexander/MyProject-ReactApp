import React, { useContext } from "react";
import Context from "../../context";

const style = {
  li: {
    listStyle: "none",
    margin: "1em",
    padding: ".5rem 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "4px"
  }
};

export default function TodoItem({ todo, idx, onChange }) {
  const {removeTodo} = useContext(Context)
    const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={style.li}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            onChange(todo.id);
          }}
        />
        <b>{idx} </b>
        {todo.title}
      </span>
      <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  );
}
