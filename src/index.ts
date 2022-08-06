import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { Query } from "./graphql/resolvers";
import { Mutation } from "./graphql/resolvers/Mutation";
import { typeDefs } from "./graphql/typeDefs";

const MONGODB = "mongodb+srv://majidgabrlo:fuchs333@cluster0.rw6ikjf.mongodb.net/?retryWrites=true&w=majority";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

mongoose.connect(MONGODB as string).then(() => {
  server.listen().then(({ url }) => {
    console.log("listining to " + url);
  });
});
