import { GraphQLClient } from "graphql-request";

const GRAPHQL_HOST = "http://localhost:4000";
const client = new GraphQLClient(GRAPHQL_HOST);

export default client;
