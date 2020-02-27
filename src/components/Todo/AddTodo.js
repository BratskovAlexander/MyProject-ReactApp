import React, { useState } from "react";

function AddTodo({ onCreate }) {

    // prop.onCreate
  const [value, setValue] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }
  return (
    <form
      style={{ marginBottom: "1rem", marginLeft: "4rem" }}
      onSubmit={submitHandler}
    >
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button type="submit">AddTodo</button>
    </form>
  );
}

export default AddTodo;
