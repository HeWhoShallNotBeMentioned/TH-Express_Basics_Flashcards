const express = require('express');

const app = express();

app.get('/', (request, response)=> {
  response.send('My first Express application! With nodemon');
});

app.listen(3001);
