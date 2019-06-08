import React, {Fragment} from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {ToIndexButton} from "../components/buttons/ToIndexButton";
import {ToNewButton} from "../components/buttons/ToNewButton";
import {ToSearchButton} from "../components/buttons/ToSearchButton";
import LogOutButton from "../components/buttons/LogOutButton";
import {ToAuthButton} from "../components/buttons/ToAuthButton";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1, 1.5),
  }
}));

const Nav = ({history, isLoggedIn}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline/>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            商品管理アプリ
          </Typography>
          <nav>
            {
              isLoggedIn ?
                <Fragment>
                  <ToIndexButton history={history} className={classes.button}/>
                  <ToNewButton history={history} className={classes.button}/>
                  <ToSearchButton history={history} className={classes.button}/>
                  <LogOutButton className={classes.button}/>
                </Fragment> :
                <ToAuthButton history={history} className={classes.button}/>
            }
          </nav>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default connect(
  state => ({
    isLoggedIn: state.loginReducer.isLoggedIn
  })
)(Nav);
