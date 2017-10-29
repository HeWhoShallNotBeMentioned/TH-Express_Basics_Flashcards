const express = require('express');
const router = express.Router();



router.get('/', (req, res)=> {
  const name = req.cookies.username;
  if (name) {
    res.render('index', { name: name});
  } else {
    res.redirect('/hello');
  }
});

router.get('/hello', (req, res)=> {
  const name = req.cookies.username;
  if (name) {
    res.redirect('/');
  } else {
    res.render('hello');
  }
});

router.post('/hello', (req, res)=> {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

router.post('/goodbye', (req, res) => {
  const name = req.cookies.username;
  res.clearCookie('username', { path: '/' });
  res.redirect('/hello');
});

router.get('/sandbox', (req, res)=> {
  res.render('sandbox', { colors, people});
});

module.exports = router;
