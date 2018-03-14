import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './message';

var appReducer = combineReducers({
    products,
    cart,
    message
})

export default appReducer;