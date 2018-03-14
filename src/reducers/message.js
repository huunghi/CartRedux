import * as types from './../constaints/ActionType';
import * as Message from './../constaints/Message';

var initialState = Message.MSG_WELLCOM;

var message = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
        console.log(action);
        
            return action.message;
        default:
            return state;
    }
}

export default message;