import { GraphQLServer } from "graphql-yoga";
import path from "path";
import mongoose from "mongoose";

import mongoConfig from "./config/mongo";
import resolvers from "./resolvers";

const { log, error } = console;

const MONGO_URL = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.base}`;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => log(`MongoDB Conectado: ${MONGO_URL}`))
  .catch((err) => error(err));

const typeDefs = path.resolve("./src/schema.graphql");
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => log("Server is running on http://localhost:4000"));
