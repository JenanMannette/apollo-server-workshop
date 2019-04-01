# Exercise 2

Goal: Add Apollo Server to our express server.

Watch it fail:
1. In one terminal tab, run your server: `npm run dev`
2. In another terminal tab, open the test runner: `npm run cypress:open`
3. Click the `anyNumber.spec.js` to run the test
4. You should see this error: `AssertionError: expected 404 to equal 200`

Make it work:
Leverage `apollo-server-express` to create a basic GraphQL server.
- Docs: https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express#express
