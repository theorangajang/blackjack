import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utilities/auth';
import * as action from './constants';

let url = "http://localhost:3000";

//////////////////////////
///////GET HAND SUM///////
//////////////////////////
// export function getHandSum(){
//     return dispatch => {
//         return axios.get(url+'/api/calculate')
//             .then((calculatedResponse) => {
//             console.log(calculatedResponse.data.handSum);
//             dispatch(calculationHandAction(calculatedResponse.data.handSum));
//         });
//     }
// }
function getHandSum(){
    return dispatch => {
        return axios.get(url+'/api/calculate')
            .then((calculatedResponse) => {
                console.log(calculatedResponse.data.handSum);
                dispatch(calculationHandAction(calculatedResponse.data.handSum));
            });
    }
}

//////////////////////////
///////DECK ACTIONS///////
//////////////////////////

//CREATE GAME
export function startGame(){
    return dispatch => {
        return axios.get(url+"/api/create")
                .then((res) => {
                    let token = res.data.token;
                    localStorage.setItem('id_token', token);
                    setAuthorizationToken(token);
                    dispatch(createDeckAction(jwtDecode(token)));
        });
    }
}

//CHOSEN ACE VALUE
export function chosenAceVal(aceValChosen){
    return dispatch => {
        return axios.post(url+"/api/ace", aceValChosen)
            .then((res) => {
                console.log(res.data.message);
                dispatch(aceValHasBeenChosen());
                dispatch(getHandSum());
        });
    }
}

//DEAL
export function dealCards(currentDeck){
    return dispatch => {
        return axios.post(url+'/api/deal', currentDeck)
            .then((res) => {
                dispatch(dealCardsAction(res.data));
                dispatch(getHandSum());
            });
    }
}

//HIT ME
export function hitMe(gameState){
    return dispatch => {
        return axios.post(url+'/api/hit', gameState)
            .then((res) => {
                dispatch(hitMeAction(res.data));
                dispatch(getHandSum());
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




