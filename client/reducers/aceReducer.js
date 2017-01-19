import { ACE_VAL_HAS_BEEN_CHOSEN } from '../actions/constants';

const initialState = {
    aceHasBeenGivenVal: false
};

export default (state = initialState, action) => {
    switch (action.type) {
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