import { ApolloServer } from "apollo-server";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typeDefs";
import dotenv from "dotenv";

dotenv.config();

const MONGODB = process.env.DATABASE_URL;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }: any): Promise<ContextType> => {
    const userData = getUserFromToken(req.headers.authorization);
    return { userData, prisma };
  },
});

server.listen().then(({ url }) => {
  console.log("listining to " + url);
});
