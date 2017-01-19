import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import aceReducer from './aceReducer';
import amountReducer from './amountReducer';

export default combineReducers({
    cardGameState: cardReducer,
    aceCardState: aceReducer,
    amountState: amountReducer,
});