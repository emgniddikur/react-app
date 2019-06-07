import React, {Fragment} from 'react';
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {logOutRequest} from "../actions/requests";

const Nav = ({history, isLoggedIn, logOutRequest}) => {
  const handleClickToIndex = e => {
    e.preventDefault();
    history.push("/items");
  };

  const handleClickToNew = e => {
    e.preventDefault();
    history.push("/items/new");
  };

  const handleClickToSearch = e => {
    e.preventDefault();
    history.push("/items/search")
  };

  const handleClickToAuth = e => {
    e.preventDefault();
    history.push("/auth");
  };

  const handleClickLogOut = e => {
    e.preventDefault();
    logOutRequest();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>商品管理アプリ</Typography>
        {
          isLoggedIn ?
            <Fragment>
              <Button color="inherit" onClick={e => handleClickToIndex(e)}>商品一覧</Button>
              <Button color="inherit" onClick={e => handleClickToNew(e)}>新規登録</Button>
              <Button color="inherit" onClick={e => handleClickToSearch(e)}>検索</Button>
              <Button color="inherit" onClick={e => handleClickLogOut(e)}>ログアウト</Button>
            </Fragment>
            : <Button color="inherit" onClick={e => handleClickToAuth(e)}>認証</Button>
        }
      </Toolbar>
    </AppBar>
  );
};

export default connect(
  state => ({
    isLoggedIn: state.loginReducer.isLoggedIn
  }),
  {logOutRequest}
)(Nav);
