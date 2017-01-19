import { CREATE_GAME, DEAL_CARDS, HIT_ME, FOLD_HAND } from '../actions/constants';

const initialState = {
    player: {
        hand: []
    },
    deck: [],
    foldedCards: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_GAME':
            state = {
                ...state,
                deck: action.deck
            };
            return state;
        case 'DEAL_CARDS':
            state = {
                ...state,
                player: {
                    hand: action.payload.hand
                },
                deck: action.payload.deck
            };
            return state;
        case 'HIT_ME':
            state = {
                ...state,
                player: {
                    hand: action.payload.hand
                },
                deck: action.payload.deck
            };
            console.log(state);
            return state;
        case 'FOLD_HAND':
            state = {
                ...state,
                player: {
                    hand: []
                },
                deck: action.payload.deck,
                foldedCards: action.payload.foldedCards
            };
            return state;
        default:
            return state;
    }
}