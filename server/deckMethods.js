import { DECK } from './constants/deck';

let currentPlayerHandAmount = 0;

export function shuffleFunc() {
    for (let new_deck_index = 0; new_deck_index < DECK.length; new_deck_index++) {
        let old_card = Math.floor(Math.random() * (new_deck_index));
        let temp = DECK[old_card];
        DECK[old_card] = DECK[new_deck_index];
        DECK[new_deck_index] = temp;
    }
    return DECK;
}

export function calculatePlayerHandWithAce(aceValueChosen) {
    console.log(aceValueChosen);
    currentPlayerHandAmount += aceValueChosen;
    console.log("new value with ace value chosen: ", currentPlayerHandAmount);
}

export function dealCardsFunc(currentDeck) {
    let playerHand = [];
    currentPlayerHandAmount = 0;
    for (let index = 0; index < 2; index++) {
        let card = currentDeck.pop();
        playerHand.push(card);
    }

    let foundAce = checkForAce(playerHand);
    return {
        foundAce: foundAce,
        hand: playerHand,
        newDeck: currentDeck
    }
}

export function hitMeFunc(gameState) {
    let card = gameState.deck.pop();
    gameState.hand.push(card);
    let foundAce = checkForAce(gameState.hand);
    gameState.foundAce = foundAce;
    return gameState;
}

export function foldHandFunc(foldedGameState) {
    let foldedCards = [];
    for (let hand_index = 0; hand_index < foldedGameState.hand.length; hand_index++) {
        foldedCards.push(foldedGameState.hand[hand_index]);
    }
    foldedGameState.hand = [];
    return {
        foldedCards: foldedCards,
        playersHand: foldedGameState.hand,
        currentDeck: foldedGameState.deck
    };
}

export function calculatePlayerHandAmount(playerHand) {
    let currentPlayerHandAmount = 0;
    if(playerHand.length <= 0){
        currentPlayerHandAmount = 0;
    }else{
        console.log(playerHand);
        for(let hand_index = 0; hand_index < playerHand.length; hand_index++){
            if(playerHand[hand_index][0] !== 'A'){
                if(playerHand[hand_index][0] === '1' || playerHand[hand_index][0] === 'J' ||  playerHand[hand_index][0] === 'Q' ||  playerHand[hand_index][0] === 'K'){
                    currentPlayerHandAmount += 10;
                }else{
                    currentPlayerHandAmount += parseInt(playerHand[hand_index][0]);
                }
            }
        }
    }
    return currentPlayerHandAmount;
}

// function calculatePlayerHandAmountWhenPlayerCallsHitMe(card){
//     if(card.number !== 'A') {
//         if (card.number === 'J' || card.number === 'Q' || card.number === 'K') {
//             currentPlayerHandAmount += 10;
//         } else {
//             currentPlayerHandAmount += card.number;
//         }
//     }
//     console.log("new total amount: ", currentPlayerHandAmount);
// }

function checkForAce(playerHand){
    for(let i = 0; i < playerHand.length; i++){
        if(playerHand[i][0] === 'A'){
            return true;
        }
    }
    return false;
}