import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

class MessageItem extends React.Component {

    render() {
        const { classes } = this.props;
        return(
            <ListItem alignItems="center"><br/>
                <ListItemText
                primary={` This message is send by `}
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
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