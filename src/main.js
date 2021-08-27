import { GraphQLServer } from "graphql-yoga";
import path from "path";
import mongoose from "mongoose";

import mongoConfig from "./config/mongo";
import resolvers from "./resolvers";

mongoose
  .connect(
    `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.base}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB Conectado");
  })
  .catch((error) => {
    console.log(error);
  });

const typeDefs = path.resolve("./src/schema.graphql");
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log("Server is running on http://localhost:4000"));
