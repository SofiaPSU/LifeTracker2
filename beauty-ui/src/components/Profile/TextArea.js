import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [text, setText] = React.useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-name"
          label="Url"
          value={text}
          onChange={handleChange}
          variant="outlined"
        />
        
      </div>
      
      <Button ><Box border={1} borderColor="black">Submit</Box></Button>
      
    </form>
  );
}
