import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { getMessage } from "../redux/selectors";


import { withStyles } from '@material-ui/core/styles';
import MessageItem from './MessageItem';
import List from '@material-ui/core/List';
import { getMessageServer } from '../redux/actions';

class MessageList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: [],
            messageServer: []
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <List className={classes.root}>
                <div>
                    <ul>
                        { this.state.messageServer.map((item) => { return <li onChange={this.getMessageServer}>{item.username}</li>})}
                    </ul>
                </div>
                {this.state.messages.map((item) => { return <MessageItem
                key={item.id}
                id={item.id}
                message={item.message} 
                />
                })}
            </List>
        );
    }

}

export default withStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
})) (connect(state => ({ messages: getMessage(state) }),  { getMessageServer}
)(MessageList));


