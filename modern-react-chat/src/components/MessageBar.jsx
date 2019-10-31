import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../redux/actions';
import MessageItem from './MessageItem';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

class MessageBar extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
            input: '',
            messages: []
            }
        }

        handleChange = (e) => {
            this.setState({input: e.target.value});  
          /*    console.log('handleChange change de valeur') */
        }
        
        handleAddMessage = (e) => {
            e.preventDefault();
            const currentMessage = this.state.input;
            this.setState({
                input: '',
                messages: this.state.messages.concat(currentMessage)
            });
            this.props.addMessage(currentMessage);
            console.log(this.state)
        }

        render() {
            return ( 
                <Box display="flex" flexDirection="column">
                    <ul>
                        {this.state.messages.map((message, id) => {
                            return (<MessageItem key={id} message={message}/>)
                        })}
                    </ul>
                    <TextField 
                        placeholder="Votre message" 
                        type="text"
                        value={this.state.input}
                        onChange={this.handleChange}
                    /><br/>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleAddMessage}
                        >
                        Envoyer
                    </Button>
                </Box>
            );
        }    

}


export default connect(
    null,
    { addMessage }
)(MessageBar);