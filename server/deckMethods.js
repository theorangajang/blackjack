const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
      suits = ['S', 'H', 'C', 'D'];

let currentPlayerHandAmount = 0;

export function getSumValueOfPlayerHand() {
    return currentPlayerHandAmount;
}

export function createDeckFunc() {
    let newDeck = [];
    for (let number_index = 0; number_index < numbers.length; number_index++) {
        for (let suits_index = 0; suits_index < suits.length; suits_index++) {
            let card = {
                suit: suits[suits_index],
                number: numbers[number_index]
            };
            newDeck.push(card);
        }
    }
    return newDeck;
}

export function shuffleFunc(currentDeck) {
    for (let new_deck_index = 0; new_deck_index < currentDeck.length; new_deck_index++) {
        let old_card = Math.floor(Math.random() * (new_deck_index));
        let temp = currentDeck[old_card];
        currentDeck[old_card] = currentDeck[new_deck_index];
        currentDeck[new_deck_index] = temp;
    }
    let newDeck = currentDeck;
    return newDeck; //return this entire object when called
}

export function calculatePlayerHandWithAce(aceValueChosen){
    console.log(aceValueChosen);
    currentPlayerHandAmount += aceValueChosen;
    console.log("new value with ace value chosen: ", currentPlayerHandAmount);
}

export function dealCardsFunc(currentDeck) {
    let playerHand = [];
    for (let index = 0; index < 2; index++) {
        let card = currentDeck.pop();
        playerHand.push(card);
    }

    let newDeck = currentDeck;
    calculatePlayerHandAmount(playerHand);

    return {
        hand: playerHand,
        withNewDeck: newDeck
    };
}

export function hitMeFunc(gameState) {
    let card = gameState.deck.pop();
    gameState.hand.push(card);
    calculatePlayerHandAmountWhenPlayerCallsHitMe(card);
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

function calculatePlayerHandAmount(playerHand) {
    for(let hand_index = 0; hand_index < playerHand.length; hand_index++){
        console.log(playerHand[hand_index].number);
        if(playerHand[hand_index].number !== 'A'){
            if(playerHand[hand_index].number === 'J' ||  playerHand[hand_index].number === 'Q' ||  playerHand[hand_index].number === 'K'){
                currentPlayerHandAmount += 10;
            }else{
                currentPlayerHandAmount += playerHand[hand_index].number;
            }
        }
    }
    console.log("total amount currently: ", currentPlayerHandAmount);
}

function calculatePlayerHandAmountWhenPlayerCallsHitMe(card){
    if(card.number !== 'A') {
        if (card.number === 'J' || card.number === 'Q' || card.number === 'K') {
            currentPlayerHandAmount += 10;
        } else {
            currentPlayerHandAmount += card.number;
        }
    }

    console.log("new total amount: ", currentPlayerHandAmount);
}
