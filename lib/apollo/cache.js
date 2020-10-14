import { InMemoryCache, makeVar } from "@apollo/client";
import shortId from "shortid";

const INITIAL_TODOS = [
  {
    id: shortId(),
    completed: false,
    text: "Use Apollo Client 3",
  },
];

const INITIAL_TODO = null;

export const todosVar = makeVar(INITIAL_TODOS);
export const todoVar = makeVar(INITIAL_TODO);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read(_, client) {
            return todosVar();
          },
        },
        todo: {
          read(_, client) {
            const allTodos = todosVar();
            return todoVar(
              allTodos.find((td) => td.id === client.variables.id)
            );
          },
        },
      },
    },
  },
});
