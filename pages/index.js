import { useState, useRef, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";

import { TODOS, TODO } from "../lib/apollo/queries/todos";
import {
  createTodo,
  updateTodo,
  deleteTodo,
} from "../lib/apollo/mutations/todos";

export default function Home() {
  const { data: todosData } = useQuery(TODOS);
  const [getTodo, { data: todoData, error, loading }] = useLazyQuery(TODO);
  const [text, setText] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");
  const updateInputRef = useRef();

  useEffect(() => {
    if (editTodo) {
      updateInputRef.current.focus();
    }
  }, [editTodo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  console.log(todoData);

  return (
    <div>
      {/* List items */}
      {todosData.todos.map((todo) => (
        <div key={todo.id}>
          <h3 onClick={() => getTodo({ variables: { id: todo.id } })}>
            {todo.text}
          </h3>
          <button
            onClick={() => {
              setEditTodo(todo);
              setEditTodoText(todo.text);
            }}
          >
            edit
          </button>
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
      ))}

      {/* Handle edit item */}
      {editTodo && (
        <form
          style={{ marginTop: "1rem" }}
          onSubmit={(evt) => {
            evt.preventDefault();
            updateTodo(editTodo.id, editTodoText);
            setEditTodo(null);
          }}
        >
          <input
            ref={updateInputRef}
            type="text"
            placeholder="Edit todo"
            value={editTodoText}
            onChange={(evt) => setEditTodoText(evt.target.value)}
          />
          <button>Update</button>
          <button onClick={() => setEditTodo(null)}>Cancel</button>
        </form>
      )}

      {/* Handle add item */}
      <form
        style={{ marginTop: "1rem" }}
        onSubmit={(evt) => {
          evt.preventDefault();
          createTodo(text);
          setText("");
        }}
      >
        <input
          type="text"
          placeholder="Add todo"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todoData && <h1>{todoData.todo.text}</h1>}
    </div>
  );
}
