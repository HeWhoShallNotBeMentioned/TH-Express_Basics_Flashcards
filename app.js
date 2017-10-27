const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
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
  res.render('hello', { name: req.cookies.username });
});

app.post('/hello', (req, res)=> {
  res.cookie('username', req.body.username);
  res.render('hello', {name: req.body.username});
});

app.get('/sandbox', (req, res)=> {
  res.render('sandbox', { colors, people});
});

app.listen(3001, () => {
  console.log("The application is running on port 3001.");
});
