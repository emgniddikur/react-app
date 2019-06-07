import React, {Fragment} from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {ToIndexButton} from "../components/buttons/ToIndexButton";
import {ToNewButton} from "../components/buttons/ToNewButton";
import {ToSearchButton} from "../components/buttons/ToSearchButton";
import LogOutButton from "../components/buttons/LogOutButton";
import {ToAuthButton} from "../components/buttons/ToAuthButton";

const Nav = ({history, isLoggedIn}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>商品管理アプリ</Typography>
        {
          isLoggedIn ?
            <Fragment>
              <ToIndexButton history={history}/>
              <ToNewButton history={history}/>
              <ToSearchButton history={history}/>
              <LogOutButton/>
            </Fragment> :
            <ToAuthButton history={history}/>
        }
      </Toolbar>
    </AppBar>
  );
};

export default connect(
  state => ({
    isLoggedIn: state.loginReducer.isLoggedIn
  })
)(Nav);
