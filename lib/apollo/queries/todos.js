import { gql } from "@apollo/client";

export const TODOS = gql`
  query Todos {
    todos @client {
      id
      text
      completed
    }
  }
`;

export const TODO = gql`
  query Todo($id: ID!) {
    todo(id: $id) @client {
      id
      text
      completed
    }
  }
`;
