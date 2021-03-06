const express = require('express');
const router = express.Router();
const data = require('../data/flashCardData.json').data;
const cards = data.cards;

router.get('/', (req, res) => {
  const numberOfCards = cards.length;
  const flashCardId = Math.floor( Math.random() * numberOfCards);
  res.redirect( `/cards/${flashCardId}?side=question`);
});

router.get('/:id', (req, res)=> {
  const {side} = req.query;
  const { id } = req.params;

  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }

  const name = req.cookies.username;
  const text = cards[id][side];
  console.log(side);
  let {hint} = cards[id];

  const templateData = { id, text, name, side };

  if (side === "question") {
    templateData.hint = hint;
    templateData.sideToShow = 'answer';
    templateData.sideToShowDisplay = "Answer";
  } else if ( side === "answer") {
      templateData.sideToShow = 'question';
      templateData.sideToShowDisplay = "Question";
  }

  res.render('card', templateData);
});

module.exports = router;
