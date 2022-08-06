import { PrismaClient, Prisma } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { Query } from "./graphql/resolvers";
import { Mutation } from "./graphql/resolvers/Mutation";
import { typeDefs } from "./graphql/typeDefs";

export const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
  userInfo: {
    userId: number;
  } | null;
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
  },
});

server.listen().then(({ url }) => {
  console.log("listining to " + url);
});
