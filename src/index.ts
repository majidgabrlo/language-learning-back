import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import { Query, Mutation } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";
import { getUserFromToken } from "./utils/getUserFromToken";


dotenv.config()
const MONGODB =process.env.MONGODB_URL
const port = process.env.PORT || 8080

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

export const app=mongoose.connect(MONGODB as string).then(() => {
  server.listen(port).then(({ url }) => {
    console.log("listining to " + url);
  });
});

