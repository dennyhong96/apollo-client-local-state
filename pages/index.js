import { useState, useRef, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { TODOS } from "../lib/apollo/queries/todos";
import {
  createTodo,
  updateTodo,
  deleteTodo,
} from "../lib/apollo/mutations/todos";

export default function Home() {
  const { data, error, loading } = useQuery(TODOS);
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

  return (
    <div>
      {/* List items */}
      {data.todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.text}</h3>
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
    </div>
  );
}
