function Deck() {
    this.deck = [];
}

Deck.prototype.create = function () {
    var numbers = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    var suits = ['S', 'H', 'C', 'D'];
    var deck = [];
    for(var number_index=0; number_index<numbers.length; number_index++){
        for(var suits_index=0; suits_index<suits.length; suits_index++){
            var card = {
                suit: suits[suits_index],
                number: numbers[number_index]
            };
            deck.push(card);
        }
    }
    this.deck = deck;
    // console.log(this.deck);
    return this;
};

Deck.prototype.shuffle = function () {
    for(var new_deck_index=0; new_deck_index<this.deck.length; new_deck_index++){
        var old_card = Math.floor(Math.random() * (new_deck_index));
        temp = this.deck[old_card];
        this.deck[old_card] = this.deck[new_deck_index];
        this.deck[new_deck_index] = temp;
    }

    // console.log(this.deck);

    console.log('');
    return this; //return this entire object when called
};

Deck.prototype.reset = function () {
    this.create();
    console.log(this.deck);
    return this;
};

Deck.prototype.deal = function () {
    card = this.deck.pop();
    console.log(this.deck.length);
    return card;
};

function Player(name){

    this.name = name;
    this.hand = [];

}

Player.prototype.cardPlayerRemoves = function() {
    if(this.hand.length < 6) {
        cardDeck.deal();
        this.hand.push(card);
        return this;
    }else {
        console.log(this.name + ' have to many cards');
    }
};

Player.prototype.fold = function (cardDeck) {
    if(this.hand <= 0) {
        console.log('you must have cards in your hand');
    }else{
        for (var i = 0; i < this.hand.length; i++) {
            card = this.hand[i];
            cardDeck.deck.unshift(card);
        }
        console.log(cardDeck.deck.number+ ' ' +cardDeck.deck.suit);
    }
};

function Pot(){
    this.bsPot = [];
}

Pot.prototype.addToPot = function () {
    //make sure to get the phrase and number of cards in deck//

    //1 first get removed card/cards from players hand
    //2 whatever those cards that are removed add them to the pot face down

};

function Game(){
    this.playersList = [];
    this.deck = new Deck();
    this.deck.create();
    this.deck.shuffle();
    // console.log(this.deck);
}

////// WHEN ADD PLAYER BUTTON IS CLICKED HAVE THEM SUBMIT NAME //////
Game.prototype.addPlayer = function (playerInfo) {
    var newPlayer = {
        name: playerInfo.name,
        hand: playerInfo.hand
    };
    this.playersList.push(newPlayer);
    console.log(this.playersList);
};

Game.prototype.addAllCardsToPlayerHand = function () {
    for(var card_index=0; card_index < this.deck['deck'].length; card_index++){
        var player_index = 0;
        console.log('added '+this.playersList[player_index].hand.push(this.deck['deck'].pop())+' to ' + this.playersList[player_index].name + ' hand');
        // console.log(this.playersList[player_index].hand);
        player_index++;
        if(player_index >= this.playersList.length ) {
            console.log('restarting list');
            player_index = 0;
        }else{
            console.log('added '+this.playersList[player_index].hand.push(this.deck['deck'].pop())+' to ' + this.playersList[player_index].name + ' hand');
        }
        // console.log(this.playersList[player_index] + 'has card' + this.deck['deck'][card_index]);
    }
    console.log(this.playersList[player_index].hand);
};


Game = new Game();
//
// //PLAYERS
alex = new Player('Alex');
Game.addPlayer(alex);
carly = new Player('Carly');
Game.addPlayer(carly);

Game.addAllCardsToPlayerHand();
// console.log(card);
// //HANDS
// alex.cardPlayerRemoves(deck);
// alex.cardPlayerRemoves(deck);
// alex.cardPlayerRemoves(deck);
// alex.cardPlayerRemoves(deck);
// alex.cardPlayerRemoves(deck);
// alex.cardPlayerRemoves(deck);
//
//
// carly.cardPlayerRemoves(deck);
// carly.cardPlayerRemoves(deck);
// carly.cardPlayerRemoves(deck);
// carly.cardPlayerRemoves(deck);
// carly.cardPlayerRemoves(deck);
// carly.cardPlayerRemoves(deck);
//
// //CHECKING WHEN GOING OVER 5 CARDS
// alex.cardPlayerRemoves(deck);
// alex.cardPlayerRemoves(deck);
// alex.cardPlayerRemoves(deck);
// alex.cardPlayerRemoves(deck);
// carly.cardPlayerRemoves(deck);
// carly.cardPlayerRemoves(deck);
// carly.cardPlayerRemoves(deck);
// carly.cardPlayerRemoves(deck);
//
// console.log('alex\'s hand');
// for(var i=0; i<alex.hand.length; i++){
//     console.log(alex.hand[i].number + ' ' + alex.hand[i].suit);
// }
//
// console.log('');
//
// console.log('carly\'s hand');
// for(var i=0; i<carly.hand.length; i++){
//     console.log(carly.hand[i].number + ' ' + carly.hand[i].suit);
// }

//PLAYER FOLD
// carly.fold(deck);







