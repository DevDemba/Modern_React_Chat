import { ADD_MESSAGE } from './actionTypes';
import axios from 'axios';

export const addMessage = (currentMessage) => {
  console.log('dans redux actions : ', currentMessage)
	return {
    type:  ADD_MESSAGE,
    currentMessage
  }
};

export const getMessageServer = () => {

  axios.get(`https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages`)
    .then(res => res.json())
    .then((messageServer) => {
      this.setState({messageServer: messageServer});
    })
    console.log('hello')
  
}

