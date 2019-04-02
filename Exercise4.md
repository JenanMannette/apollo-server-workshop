# Exercise 4

Goal: Implement a data source that makes real API requests from the GraphQL server.

Watch it fail:
1. In one terminal tab, run your server: `npm run dev`
2. In another terminal tab, open the test runner: `npm run cypress:open`
3. Click the `users.spec.js` to run the tests
4. You should see this error: `expected 400 to equal 200`

Make it work:
- Find the `UsersAPI.js` file and implement the `getUser` method.
- Open the `server.js` file and take note of the reference to `UsersAPI`.
- You will need to add a `User` type to your schema
- You will need to implement a `user` query and associated resolver that leverages the `UsersAPI`.

Hint: the 3rd argument of a resolver function is an object that has a `dataSources` property.
