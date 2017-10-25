const express = require('express');

const app = express();

app.get('/', (req, res)=> {
  res.send('<h1>My first Express application! With nodemon!</h1>');
});

app.get('/hello', (req, res)=> {
  res.send('<h1>Welcome, Javascript Developers</h1>');
});

app.listen(3001, () => {
  console.log("The application is running on port 3001.");
});
