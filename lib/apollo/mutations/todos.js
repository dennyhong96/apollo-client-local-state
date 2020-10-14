import shortId from "shortid";
import { todosVar } from "../cache";
import axios from "axios";

export const createTodo = async (text) => {
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  await axios.get("https://jsonplaceholder.typicode.com/posts");
  const allTodos = todosVar();
  todosVar([...allTodos, { text, completed: false, id: shortId() }]);
};

export const updateTodo = (id, text) => {
  const allTodos = todosVar();
  todosVar(allTodos.map((td) => (td.id === id ? { ...td, text } : td)));
};

export const deleteTodo = (id) => {
  const allTodos = todosVar();
  todosVar(allTodos.filter((td) => td.id !== id));
};
