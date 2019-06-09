import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const useStyles = makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
    margin: theme.spacing(1)
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  list: {
    listStyle: 'square',
    marginLeft: 25
  }
}));

const ErrorMessage = ({message, details}) => {
  const classes = useStyles();

  if (!message) {
    return null;
  }

  return (
    <SnackbarContent
      className={classes.error}
      aria-describedby="client-snackbar"
      message={
        <Fragment>
          <p className={classes.message}>
            {message}
          </p>
          {
            details !== undefined && details !== null &&
            <ul>
              {
                Object.values(details).map((value, index) => {
                  return <li key={index} className={classes.list}>{value}</li>;
                })
              }
            </ul>
          }
        </Fragment>
      }
    />
  );
};

export default connect(
  state => ({
    message: state.errorReducer.message,
    details: state.errorReducer.details
  })
)(ErrorMessage)
