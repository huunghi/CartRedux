import * as types from './../constaints/ActionType';

export const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
};

export const changeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
};

export const deleteItem = (cart) => {
    return {
        type: types.REMOVE_FROM_CART,
        cart
    }
};

export const updateQuantityinCart = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY_IN_CART,
        product,
        quantity
    }
};