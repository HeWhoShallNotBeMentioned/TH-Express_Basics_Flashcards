const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes/index');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use('/cards', cardRoutes);

// app.get('/cards', (req, res)=> {
//   res.render('card', {prompt: "Who is buried in Grant's tomb?"});
//   console.log("in cards / get");
// });

app.use((req, res, next)=> {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(3001, () => {
  console.log("The application is running on port 3001.");
});
