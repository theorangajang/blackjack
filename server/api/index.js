import express from 'express';
import { createDeckFunc, shuffleFunc, dealCardsFunc, hitMeFunc, foldHandFunc, calculatePlayerHandWithAce, getSumValueOfPlayerHand } from '../deckMethods';
import jwt from 'jsonwebtoken';

let router = express.Router();
let deck = createDeckFunc();

router.get('/create', (req, res) => {
    let shuffledDeck = shuffleFunc(deck);
    res.json({ deckData: shuffledDeck });
});

router.get('/calculate', (req, res) => {
    let sum = getSumValueOfPlayerHand();
    res.json({ handSum: sum });
});

router.post('/ace', (req, res) => {
    calculatePlayerHandWithAce(req.body.value);
    res.json({message: "you have successfully chosen ace val"})
});

router.post('/deal', (req, res) => {
    console.log(req.body);
   let dealGameState = dealCardsFunc(req.body);
   res.json({
       hand: dealGameState.hand,
       withNewDeck: dealGameState.withNewDeck
   });
});

router.post('/hit', (req, res) => {
   let hitMeGameState = hitMeFunc(req.body);
   res.json(hitMeGameState);
});

router.post('/fold', (req, res) => {
    console.log(req.body);
    let foldedGameState = foldHandFunc(req.body);
    res.json(foldedGameState);
});

export default router;