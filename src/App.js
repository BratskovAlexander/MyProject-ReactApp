import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import service from "./service/service";
import TransitionsModal from "./components/TransitionsModal";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosSearch, setTodosSearch] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValueSearch, setInputValueSearch] = useState("");
  const [modalInputValueSearch, setModalInputValueSearch] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const todoCompleted = todo => {
    let indexTodo = todos.indexOf(todo);
    let newTodos = todos.concat();
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    setTodos(newTodos);
  };

  const deleteTodo = () => {
    let newTodos = todos.concat();
    let filter = newTodos.filter(todo => todo.completed === false);
    setTodos(filter);
    setTodosSearch(filter);
    setInputValueSearch("");
  };

  const getTodos = async () => {
    if (todos.length === 0) {
      let todos = await service.getAllTodos();
      setTodos(todos);
    }
  };

  useEffect(() => {
    if (todos.length === 0) {
      getTodos();
    }
  });

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

  const inputValueSearchOnChange = event => {
    setInputValueSearch(event.target.value);
    const search = todos.filter(todo =>
      todo.title.includes(event.target.value)
    );
    if (event.target.value.trim() === "") {
      setTodosSearch([]);
    } else {
      setTodosSearch(search);
      setModalOpen(true);
      setModalInputValueSearch(event.target.value)
    }
  };

  const changeModaleVisible = (item) => {
    setModalOpen(item);
  }

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
        <TextField
          onChange={inputValueSearchOnChange}
          value={inputValueSearch}
          style={{ display: "inline-block", width: "20%", margin: "1rem" }}
          id="outlined-basic-1"
          label="Search"
          variant="outlined"
        />
      </div>

     { modalOpen && (
            <TransitionsModal
              todosSearch={todosSearch}
              todoCompleted={todoCompleted}
              visible={modalOpen}
              setVisible={changeModaleVisible}
              valueInput={inputValueSearch}
              setModalInputValueSearch={setInputValueSearch}
              inputValueSearchOnChange={inputValueSearchOnChange}
            />
          )}

      {todosSearch.length === 0
        ? 
        
        todos.map(item => (
              <TodoList
                key={item.id}
                todos={item}
                todoCompleted={todoCompleted}
              />
            ))
        : 
          todosSearch.map(item => (
            <TodoList
              key={item.id}
              todos={item}
              todoCompleted={todoCompleted}
            />
          ))}
      <Button onClick={deleteTodo} color="inherit" size="small">
        Delete Todo
      </Button>
    </div>
  );
}

export default App;
