import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MessageItem from './MessageItem';
import List from '@material-ui/core/List';

class MessageList extends PureComponent {
    state = {
        messages: [
            { id: 1, author: 'Jean ', message: 'Je suis en week-end aujourd\'hui ' },
            { id: 2, author: 'Pierre ', message: 'Je suis en full time sur le PHP ' },
            { id: 3, author: 'Nicolas ', message: 'Je fais ma presentation du projet ' }
        ]
    };

    render() {
        const { classes } = this.props;
        return (
            <List className={classes.root}>
                {this.state.messages.map((item) => { return <MessageItem
                id={item.id}
                message={item.message} 
                author={item.author}
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
}))(MessageList);

