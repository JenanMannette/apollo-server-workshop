const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const UsersAPI = require('./UsersAPI');

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
      user(id: Int!): User
    }
    type Mutation {
      setAnyNumber(value: String!): String!
    }

    type User {
      name: String!
      email: String!
    }
  `,
  resolvers: {
    Query: {
      anyNumber: () => anyNumber,
      user: (_, args, { dataSources }) => dataSources.usersAPI.getUser(args.id),
    },
    Mutation: {
      setAnyNumber: (_, args) => {
        anyNumber = args.value;
        return anyNumber;
      },
    },
  },
  dataSources: () => ({
    // Exercise4
    usersAPI: new UsersAPI(),
  }),
});
apolloServer.applyMiddleware({ app: server });

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('listening on port 3000'));
