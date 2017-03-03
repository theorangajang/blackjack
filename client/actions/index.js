import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utilities/auth';
import * as action from './constants';

let url = "http://localhost:3000";

function calculateHand(playerHand){
    console.log(playerHand);
    return dispatch => {
        return axios.post(url+'/api/calculate', playerHand)
            .then((calculatedResponse) => {
                console.log(calculatedResponse.data.handSum);
                dispatch(calculationHandAction(calculatedResponse.data.handSum));
            });
    }
}

//CREATE GAME
export function startGame(){
    return dispatch => {
        return axios.get(url+"/api/create")
                .then((res) => {
                    let deck = res.data.deckData;
                    dispatch(createDeckAction(deck));
        });
    }
}

//CHOSEN ACE VALUE
export function chosenAceVal(handWithAce){
    return dispatch => {
        return axios.post(url+"/api/ace", handWithAce)
            .then((res) => {
                console.log(res.data.message);
                dispatch(aceValHasBeenChosen());
                dispatch(calculateHand());
        });
    }
}

//DEAL
export function dealCards(currentDeck){
    return dispatch => {
        return axios.post(url+'/api/deal', currentDeck)
            .then((res) => {
                dispatch(dealCardsAction(res.data));
                dispatch(calculateHand(res.data.hand));
            });
    }
}

//HIT ME
export function hitMe(gameState){
    return dispatch => {
        return axios.post(url+'/api/hit', gameState)
            .then((res) => {
                dispatch(hitMeAction(res.data));
                dispatch(calculateHand(res.data.hand));
            });
    }
}

//FOLD HAND
export function foldHand(playersHand){
    return dispatch => {
        return axios.post(url+'/api/fold', playersHand)
            .then((res) => {
                dispatch(foldHandAction(res.data));
                dispatch(getHandSum());
            });
    }
}

export function resetEntireGame() {
    return dispatch => {
        return axios.get(url+"/api/create")
            .then((res) => {
                dispatch(resetGame(res.data.deckData));
            });
    }
}

//////////////////////////
///////DECK ACTIONS///////
//////////////////////////
function createDeckAction(deck){
    return {
        type: action.CREATE_GAME,
        deck
    }
}

function dealCardsAction(playersHand){
    return {
        type: action.DEAL_CARDS,
        payload: {
            foundAce: playersHand.foundAce,
            hand: playersHand.hand,
            deck: playersHand.withNewDeck
        }
    }
}

function aceValHasBeenChosen(){
    return {
        type: action.ACE_VAL_HAS_BEEN_CHOSEN,
        aceChosenIsTrue: true
    }
}

function hitMeAction(playersHand){
    return {
        type: action.HIT_ME,
        payload: {
            foundAce: playersHand.foundAce,
            hand: playersHand.hand,
            deck: playersHand.deck
        }
    }
}

function foldHandAction(foldedGameState){
    return {
        type: action.FOLD_HAND,
        payload: {
            hand: foldedGameState.playersHand,
            deck: foldedGameState.currentDeck,
            foldedCards: foldedGameState.foldedCards
        }
    }
}

function calculationHandAction(sum){
    return {
        type: action.CALCULATE_HAND,
        sumOfHand: sum
    }
}

function resetGame(newDeck){
    return {
        type: action.RESET_GAME,
        payload:{
            newDeck: newDeck,
            amount: 0
        }
    }
}




