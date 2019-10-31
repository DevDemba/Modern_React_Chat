import { ADD_MESSAGE } from './actionTypes';
import { getMessageServer } from './actions';

const messageReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_MESSAGE:
        return state.concat(action.currentMessage);
      case getMessageServer: 
        return state.messageServer;
      default:
        return state;
    }
};

export default messageReducer;


