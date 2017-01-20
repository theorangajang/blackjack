import { ACE_VAL_HAS_BEEN_CHOSEN } from '../actions/constants';

const initialState = {
    aceHasBeenGivenVal: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'DEAL_CARDS':
            state = {
                ...state,
                aceHasBeenGiveVal: false
            };
            return state;
        case 'HIT_ME':
            state = {
                ...state,
                aceHasBeenGiveVal: false
            };
            console.log(state);
            return state;
        case 'RESET_GAME':
            state = {
                ...state,
                aceHasBeenGiveVal: false
            };
            return state;
        case 'ACE_VAL_HAS_BEEN_CHOSEN':
            state = {
                ...state,
                aceHasBeenGivenVal: action.aceChosenIsTrue
            };
            return state;
        default:
            return state;
    }
}