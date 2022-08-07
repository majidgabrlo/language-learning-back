import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    me: User
    languagesList: [LanguageListItem!]!
    languageList: [Language!]!
    wordsList(languageShortName: String!): [Word!]!
  }
  type Mutation {
    signup(credentials: CredentialsInput!, name: String!): AuthPayload!
    signin(credentials: CredentialsInput!): AuthPayload!
    addLanguage(name: String!, languageShortName: String!): String!
    removeLanguage(languageShortName: String!): String!
    addWord(languageShortName: String!, word: String, meaning: String): String!
    removeWord(languageShortName: String!, word: String): String!
  }
  type User {
    id: ID!
    email: String!
    name: String!
    languages: [Language!]
  }

  type LanguageListItem {
    name: String!
    shortName: String!
    flagUrl: String!
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
