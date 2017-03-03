import { expect } from 'chai';
import { describe, it, to, be, an, have } from 'mocha';
import { shuffleFunc, dealCardsFunc } from '../deckMethods';
import { DECK } from '../constants/deck';

describe('deck method tests', () => {
    describe.only('shuffleFunc', () => {
        it(" should return a shuffled deck", (done) => {
            let shuffledDeck = shuffleFunc();
            expect(shuffledDeck).to.be.an('array');
            expect(shuffledDeck.length).to.be.equal(52);
            done();
        })
    });

    describe.only('dealCardsFunc', () => {
        it("should return a hand of size 2 and deck size of 50", (done) => {
            let shuffledDeck = shuffleFunc();
            let playerHandAndDeck = dealCardsFunc(shuffledDeck);

            //PlayerHand Tests
            for(let card_index=0; card_index < playerHandAndDeck.hand.length; card_index++){
                if(playerHandAndDeck.hand[card_index][0] === 'A'){
                    expect(playerHandAndDeck.foundAce).to.be.true;
                }
            }
            expect(playerHandAndDeck.foundAce).to.be.false;
            expect(playerHandAndDeck.hand).to.be.an('array');
            expect(playerHandAndDeck.hand.length).to.be.equal(2);

            //Deck Tests
            expect(playerHandAndDeck.newDeck).to.be.an('array');
            expect(playerHandAndDeck.newDeck.length).to.be.equal(50);
            done();
        });
    });
});