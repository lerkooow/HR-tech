import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const ACCESS_TOKEN_MUTATION = gql`
  mutation Refresh($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }
`;
