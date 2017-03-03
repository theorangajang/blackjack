import express from 'express';
import { shuffleFunc, dealCardsFunc, hitMeFunc, foldHandFunc, calculatePlayerHandAmount, calculatePlayerHandWithAce } from '../deckMethods';
import jwt from 'jsonwebtoken';

let router = express.Router();

router.get('/create', (req, res) => {
    let shuffledDeck = shuffleFunc();
    res.json({ deckData: shuffledDeck });
});

router.post('/calculate', (req, res) => {
    let sum = calculatePlayerHandAmount(req.body);
    res.json({ handSum: sum });
});

router.post('/ace', (req, res) => {
    let sum = calculatePlayerHandAmount(req.body.hand) + req.body.value.value;
    res.json({handSum: sum})
});

router.post('/deal', (req, res) => {
   let dealGameState = dealCardsFunc(req.body);
   res.json({
       foundAce: dealGameState.foundAce,
       hand: dealGameState.hand,
       withNewDeck: dealGameState.newDeck
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