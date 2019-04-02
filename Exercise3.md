# Exercise 3

Goal: Write a mutation that changes a value.

Watch it fail:
1. In one terminal tab, run your server: `npm run dev`
2. In another terminal tab, open the test runner: `npm run cypress:open`
3. Click the `anyNumber.spec.js` to run the tests
4. You should see this error: `expected 400 to equal 200`

Make it work:
Enhance the Apollo Server to add a mutation called setAnyNumber that takes a string argument and modifies a local value.
