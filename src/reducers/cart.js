import * as types from './../constaints/ActionType';
import _ from 'lodash';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

var cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = _.findIndex(state, function (o) { return o.product.id === product.id; });
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        case types.REMOVE_FROM_CART:
            index = _.findIndex(state, function (o) { return o.product.id === action.cart.id; });
            state.splice(index, 1);
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        case types.UPDATE_QUANTITY_IN_CART:
            index = _.findIndex(state, function (o) { return o.product.id === product.id; });
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state]
        default:
            return [...state];
    }
}

export default cart;