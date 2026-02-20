import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

async function start() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const port = Number(process.env.PORT ?? 4000);

  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });

  console.log(`GraphQL ready at ${url}`);
}

start().catch((e) => {
  console.error(e);
  process.exit(1);
});
