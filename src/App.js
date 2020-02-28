import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "сделать ап", completed: true },
    { id: 2, title: "сделать oп", completed: false },
    { id: 3, title: "сделать iп", completed: false },
    { id: 4, title: "сделать yп", completed: false },
    { id: 5, title: "сделать eп", completed: false }
  ]);

  const [inputValue, setInputValue] = useState("");

  const [alertSuccess, setAlertSuccess] = useState(false);

  const [alertError, setAlertError] = useState(false);

  const todoCompleted = todo => {
    let indexTodo = todos.indexOf(todo);
    let newTodos = todos.concat();
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    setTodos(newTodos);
  };

  const deleteTodo = () => {
    console.log(todos); 
    let newTodos = todos.concat();

    if (newTodos.completed) {
      console.log(1);
    }

    // newTodos.splice(todos.indexOf(todos), 1);
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (inputValue.trim()) {
      let newTodos = todos.concat({
        id: new Date().getMilliseconds(),
        title: inputValue,
        completed: false
      });
      setTodos(newTodos);
      setAlertSuccess(true);
      setTimeout(() => {
        setAlertSuccess(false);
      }, 1000);
      setInputValue("");
    } else {
      setAlertError(true);
      setTimeout(() => {
        setAlertError(false);
      }, 1000);
    }
  };

  const inputValueOnChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="page">
      <h1>my Todo List</h1>
      {alertSuccess && alertError !== true ? (
        <Alert
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            margin: "1rem"
          }}
          variant="filled"
          severity="success"
        >
          Todo is successfully added
        </Alert>
      ) : null}
      {alertError ? (
        <Alert
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            margin: "1rem"
          }}
          variant="filled"
          severity="error"
        >
          Enter the data
        </Alert>
      ) : null}
      <div className="addTodo">
        <TextField
          onChange={inputValueOnChange}
          value={inputValue}
          style={{ display: "inline-block", width: "20%", margin: "1rem" }}
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
        <Button onClick={addTodo} color="inherit" size="small">
          ADD Todo
        </Button>
      </div>

      {todos.map(item => (
        <TodoList
          key={item.id}
          todos={item}
          todoCompleted={todoCompleted}
          // deleteTodo={deleteTodo}
        />
      ))}
      <Button onClick={deleteTodo} color="inherit" size="small">
        Delete Todo
      </Button>
    </div>
  );
}
export default App;
