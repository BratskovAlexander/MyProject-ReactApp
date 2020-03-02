import axios from "axios";

const service = {
  getAllTodos: async () => {
    const todos = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    return todos.data;
  }
};

export default service;
