import { InMemoryCache, makeVar } from "@apollo/client";
import shortId from "shortid";

const todosInitialValue = [
  {
    id: shortId(),
    completed: false,
    text: "Use Apollo Client 3",
  },
];

export const todosVar = makeVar(todosInitialValue);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar();
          },
        },
      },
    },
  },
});
