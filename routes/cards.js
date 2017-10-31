const express = require('express');
const router = express.Router();
const data = require('../data/flashCardData.json').data;
const cards = data.cards;
router.get('/:id', (req, res)=> {
  const {side} = req.query;
  const { id } = req.params;
  const text = cards[id][side];
  console.log(side);
  let {hint} = cards[id];

  const templateData = { text };

  if (side == "question") {
    templateData.hint = hint;
  }
  res.render('card', templateData);
});

module.exports = router;
