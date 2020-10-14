import shortId from "shortid";
import { todosVar } from "../cache";

export const createTodo = async (text) => {
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
