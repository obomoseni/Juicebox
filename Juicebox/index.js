const express = require('express');
const morgan = require('morgan');
const server = express();
const apiRouter = require('./api/index');
const { client } = require('./db');
client.connect();

server.use(morgan('dev'));

server.use(express.json());

server.use('/api', apiRouter);




const PORT = 3000;

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});
