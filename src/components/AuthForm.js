import React from 'react';
import {Button, TextField} from '@material-ui/core';

export const AuthForm = ({requestAuthentication}) => {
  let input;

  const handleClick = e => {
    e.preventDefault();
    requestAuthentication(input.value);
  };

  return (
    <form>
      <TextField
        id="authToken"
        label="認証トークン"
        inputRef={node => input = node}
      />
      <Button variant="contained" color="primary" onClick={e => handleClick(e)}>
        送信
      </Button>
    </form>
  );
};
