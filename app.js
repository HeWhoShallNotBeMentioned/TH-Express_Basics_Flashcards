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

app.use( (req, res, next) =>{
  console.log("hello");
  const err = new Error('Oh noes!');
  err.status = 500;
  next(err);
});

app.use((req, res, next) =>{
  console.log("world");
  next();
});

app.get('/', (req, res)=> {
  const name = req.cookies.username;
  if (name) {
    res.render('index', { name: name});
  } else {
    res.redirect('/hello');
  }
});

app.post('/goodbye', (req, res) => {
  const name = req.cookies.username;
  res.clearCookie('username', { path: '/' });
  res.redirect('/hello');
});

app.get('/cards', (req, res)=> {
  res.render('card', {prompt: "Who is buried in Grant's tomb?", colors});
});

app.get('/hello', (req, res)=> {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

app.post('/hello', (req, res)=> {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

app.get('/sandbox', (req, res)=> {
  res.render('sandbox', { colors, people});
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(3001, () => {
  console.log("The application is running on port 3001.");
});
