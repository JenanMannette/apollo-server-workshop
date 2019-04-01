# Exercise 1

Goal: Implement a basic /health route in the `express` server.

Watch it fail:
1. Run your server: `npm run dev`
2. In a browser, navigate to http://localhost:3000/health
3. You should see a "Cannot GET /health" error message

Make it work:
Modify the `express` server to respond with a 200 status code and a simple string in the response.

FYI: Our production infrastructure performs health checks to ensure servers are available. On the web team, we prefer this to be the specific /health route but some services just use the root (/).