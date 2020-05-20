import {ApolloServer} from "apollo-server-express";
import {gql} from "apollo-boost";
const express = require('express');
import {loaders} from './services/dataLoaders';
const resolvers = require('./resolvers').default;
const fs = require('fs');
const path = require('path');

const settings = {
  'editor.theme': 'light',
  'editor.fontSize': 20,
  'editor.cursorShape': 'line',
};

const typeDefs = fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8").toString();

const server = new ApolloServer({
  playground: { settings },
  typeDefs: gql`${typeDefs}`,
  resolvers,
  context: () => ({
    loaders
  })
});

const app = express();

server.applyMiddleware({app});

app.listen(4000, () => console.log(`Now browse to localhost:4000${server.graphqlPath}`));
