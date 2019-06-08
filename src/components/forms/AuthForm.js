import React from 'react';
import {Button, TextField} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

export const AuthForm = ({authRequest}) => {
  let input;

  const handleClick = e => {
    e.preventDefault();
    authRequest(input.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <Typography component="h1" variant="h5" align="center">
        ログイン
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="authToken"
          label="認証トークン"
          inputRef={node => input = node}
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={e => handleClick(e)}
        >
          ログイン
        </Button>
      </form>
    </Container>
  );
};
