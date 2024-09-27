import { gql } from "../../__generated__/gql";

export const GET_CHARACTERS = gql(`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        gender
      }
    }
  }
`);
