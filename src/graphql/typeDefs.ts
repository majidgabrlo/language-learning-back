import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    signup(credentials: CredentialsInput!, name: String!): AuthPayload!
    signin(credentials: CredentialsInput!): AuthPayload!
    addLanguage(name: String!, languageShortName: String!): String!
  }
  type User {
    id: ID!
    email: String!
    name: String!
    languages: [Language!]
  }

  type Language {
    id: ID!
    name: String!
    shortName: String!
    words: [Word!]!
  }

  type Word {
    id: ID!
    word: String!
    meaning: String!
  }

  type AuthPayload {
    userErrors: [UserError!]!
    token: String
  }

  input CredentialsInput {
    email: String!
    password: String!
  }

  type UserError {
    message: String!
  }
`;
