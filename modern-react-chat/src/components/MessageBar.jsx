import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

class MessageBar extends React.Component {
   
        render() {
            return ( 
                <Box>
                    <TextField placeholder="Votre message" type="text" /><br></br>
                    <Button
                        variant="contained"
                        color="primary">
                        Envoyer
                    </Button>
                </Box>
            );
        }

}

export default MessageBar ;