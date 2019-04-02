# Exercise 4

Goal: Implement a data source that makes real API requests from the GraphQL server.

Watch it fail:
1. In one terminal tab, run your server: `npm run dev`
2. In another terminal tab, open the test runner: `npm run cypress:open`
3. Click the `users.spec.js` to run the tests
4. You should see an error.

Make it work:
Enhance the Apollo Server to add a mutation called setAnyNumber that takes a string argument and modifies a local value.
