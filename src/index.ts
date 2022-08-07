import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { Query, Mutation } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";
import { getUserFromToken } from "./utils/getUserFromToken";

const MONGODB =
  "mongodb+srv://majidgabrlo:fuchs333@cluster0.rw6ikjf.mongodb.net/?retryWrites=true&w=majority";

export interface Context {
  userInfo: {
    userId: string;
  } | null;
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
  context: async ({ req }: any): Promise<Context> => {
    const userInfo = await getUserFromToken(req.headers.authorization);

    return {
      userInfo,
    };
  },
});

mongoose.connect(MONGODB as string).then(() => {
  server.listen().then(({ url }) => {
    console.log("listining to " + url);
  });
});
