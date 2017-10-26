const express = require('express');

const app = express();
const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

const people = [
  {first: "a", last: "v" },
  {first: "b", last: "w" },
  {first: "c", last: "x" },
  {first: "d", last: "y"},
  {first: "e", last: "z"}
];

app.set('view engine', 'pug');

app.get('/', (req, res)=> {
  res.render('index');
});

app.get('/cards', (req, res)=> {
  res.render('card', {prompt: "Who is buried in Grant's tomb?", colors});
});

app.get('/sandbox', (req, res)=> {
  res.render('sandbox', { colors, people});
});

app.listen(3001, () => {
  console.log("The application is running on port 3001.");
});
