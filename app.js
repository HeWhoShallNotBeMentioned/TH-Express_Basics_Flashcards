const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
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

app.get('/hello', (req, res)=> {
  res.render('hello');
});

app.post('/hello', (req, res)=> {
  console.log(req.body);
  res.render('hello');
});

app.get('/sandbox', (req, res)=> {
  res.render('sandbox', { colors, people});
});

app.listen(3001, () => {
  console.log("The application is running on port 3001.");
});
