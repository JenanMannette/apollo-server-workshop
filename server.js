const express = require('express');

const server = express();

// Exercise1 Solution
server.get('/health', (req, res) => {
  res.send('ok');
});

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('listening on port 3000'));
