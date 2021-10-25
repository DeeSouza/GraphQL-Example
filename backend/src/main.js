import path from "path";

import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";

import mongoConfig from "./config/mongo";
import resolvers from "./resolvers";

const { log, error } = console;

// Conexão com o MondoDB
const MONGO_URL = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.base}`;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => log(`MongoDB Conectado: ${MONGO_URL}`))
  .catch((err) => error(err));

// Caminho do arquivo de schema
const typeDefs = path.resolve("./src/schema.graphql");

/**
 * @param typeDefs Aplicação do Schema do GraphQL com as definições de tipos
 * @param resolvers Responsável pela execução das queries definidas no schema da aplicação.
 * Os dados utilizados em uma aplicação que utiliza GraphQL pode ter origem em um banco de dados...
 * ... ou até mesmo em um array de objetos.
 */
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => log("Server GraphQL is running on http://localhost:4000"));
