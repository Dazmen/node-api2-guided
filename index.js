const express = require('express');


const hubsRouter = require('./hubs/hubs-router.js'); // <-- added

const server = express();

server.use(express.json());

// for URLs beginning with ... /api/hubs
server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});





// add an endpoint that returns all the messages for a hub

// add an endpoint for adding new message to a hub
const port = 5000;
server.listen(5000, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
