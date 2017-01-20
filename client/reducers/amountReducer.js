import { CALCULATE_HAND, RESET_GAME } from '../actions/constants';

const initialState = {
    amount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CALCULATE_HAND':
            state = {
                ...state,
                amount: action.sumOfHand
            };
            return state;
        case 'RESET_GAME':
            state = {
                ...state,
                amount: action.payload.amount
            };
            return state;
        default:
            return state;
    }
}