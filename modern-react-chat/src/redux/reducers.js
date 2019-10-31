import { ADD_MESSAGE } from './actionTypes';

const messageReducer = (state = [], action) => {
    switch (action.type) {
      case ADD_MESSAGE:
        return state.concat(action.currentMessage);
      default:
        return state;
    }
};

export default messageReducer;

