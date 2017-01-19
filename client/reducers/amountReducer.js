import { CALCULATE_HAND } from '../actions/constants';

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
        default:
            return state;
    }
}