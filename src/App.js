import React from "react";
import "./App.css";
import TodoList from "./components/Todo/TodoList";
import Context from "./context";
import AddTodo from "./components/Todo/AddTodo";

function App() {
  const [todos, setTodo] = React.useState([
    { id: 1, completed: false, title: "сделай оп" },
    { id: 2, completed: true, title: "сделай уп" },
    { id: 3, completed: false, title: "сделай ёп" },
    { id: 4, completed: false, title: "сделай ап" }
  ]);

  const toggleTodo = id => {
    setTodo(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  function addTodo(title) {
    setTodo(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    );
  }

  const removeTodo = id => {
    setTodo(todos.filter(todo => todo.id !== id));
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <>
        <h1>React Todo List</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todo={todos} onToggle={toggleTodo} />
        ) : (
          <p>"У вас нет заданий"</p>
        )}
      </>
    </Context.Provider>
  );
}

export default App;
