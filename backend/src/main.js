import path from "path";
import { GraphQLServer } from "graphql-yoga";

import resolvers from "./resolvers";

// Caminho do arquivo de schema
const typeDefs = path.resolve("./src/schema.graphql");

/**
 * @param typeDefs Aplicação do Schema do GraphQL com as definições de tipos
 * @param resolvers Responsável pela execução das queries definidas no schema da aplicação.
 * Os dados utilizados em uma aplicação que utiliza GraphQL pode ter origem em um banco de dados...
 * ... ou até mesmo em um array de objetos.
 */
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() =>
  console.log("Server GraphQL is running on http://localhost:4000")
);
