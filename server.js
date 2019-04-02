const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const server = express();

// Exercise1 Solution
server.get('/health', (req, res) => {
  res.send('ok');
});

// Exercise2 Solution
// Exercise3 Solution
let anyNumber = 'Threeve';
const apolloServer = new ApolloServer({
  typeDefs: gql`
    type Query {
      anyNumber: String
    }
    type Mutation {
      setAnyNumber(value: String!): String!
    }
  `,
  resolvers: {
    Query: {
      anyNumber: () => anyNumber,
    },
    Mutation: {
      setAnyNumber: (_, args) => {
        anyNumber = args.value;
        return anyNumber;
      },
    },
  },
});
apolloServer.applyMiddleware({ app: server });

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('listening on port 3000'));
