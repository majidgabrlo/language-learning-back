import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    signup(
      credentials: CredentialsInput!
      name: String!
    ): AuthPayload!
    signin(credentials: CredentialsInput!): AuthPayload!
  }
  type User {
    id: ID!
    email: String!
    name: String!
    languages: [Language!]
    words: [Word!]
  }

  type Language {
    id: ID!
    name: String!
    shortName: String!
    users: [User!]!
    words: [Word!]!
  }

  type Word {
    id: ID!
    userId: ID!
    languageId: ID!
    user: User
    language: Language
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
