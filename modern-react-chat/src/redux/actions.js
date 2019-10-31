import { ADD_MESSAGE } from './actionTypes';

export const addMessage = (currentMessage) => {
  console.log('dans redux actions : ', currentMessage)
	return {
    type:  ADD_MESSAGE,
    currentMessage
  }
};
