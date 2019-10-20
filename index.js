const express = require('express');

const server = express();

server.get('/', (req, res) =>{
  return res.send('hello world, Git!');
});

server.listen(3333);