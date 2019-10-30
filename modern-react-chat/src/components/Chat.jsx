import React from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';
import Container from '@material-ui/core/Container';


class Chat extends React.Component {
        render() {
            return (
                <Container maxWidth="sm">
                    <MessageList/>
                    <MessageBar/>
                </Container>
            );
        }

}

export default Chat;