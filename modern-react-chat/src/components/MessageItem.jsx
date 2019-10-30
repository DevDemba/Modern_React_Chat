import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

class MessageItem extends React.Component {

render(){
    const { classes } = this.props;
    return(
        <ListItem alignItems="flex-start">
            <ListItemText
            primary={` This message is n°`+ this.props.id}
            secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body"
                    className={classes.inline}
                    color="textPrimary"
                >
                {this.props.author} -
                </Typography>
                {this.props.message}
                </React.Fragment>
          }
        />
        </ListItem>
       
    )
    
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
}))(MessageItem);