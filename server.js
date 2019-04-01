const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const server = express();

// Exercise1 Solution
server.get('/health', (req, res) => {
  res.send('ok');
});

// Exercise2 Solution
const apolloServer = new ApolloServer({
  typeDefs: gql`
    type Query {
      anyNumber: String
    }
  `,
  resolvers: {
    Query: {
      anyNumber: () => 'Threeve',
    },
  },
});
apolloServer.applyMiddleware({ app: server });

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('listening on port 3000'));
