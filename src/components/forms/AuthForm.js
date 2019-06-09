import React, {Fragment} from 'react';
import {Button, makeStyles, TextField} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export const AuthForm = ({authRequest}) => {
  let input;

  const handleClick = e => {
    e.preventDefault();
    authRequest(input.value);
  };

  const useStyles = makeStyles(theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    inputFileBtnHide: {
      opacity: 0,
      appearance: "none",
      position: "absolute",
    },
    button: {
      marginTop: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h4" align="center">
              ログイン
            </Typography>
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
              className={classes.button}
              onClick={e => handleClick(e)}
            >
              送信
            </Button>
          </Container>
        </Paper>
      </main>
    </Fragment>
  );
};
