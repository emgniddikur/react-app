import React from 'react';
import {connect} from "react-redux";
import {indexRequest} from "../actions/requests";
import {setItems} from "../actions/items";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";

const Nav = ({history, indexRequest, setItems}) => {
  const handleClickToIndex = e => {
    e.preventDefault();
    indexRequest();
  };

  const handleClickToNew = e => {
    e.preventDefault();
    history.push("/items/new");
  };

  const handleClickToSearch = e => {
    e.preventDefault();
    setItems([]);
    history.push("/items/search")
  };

  const handleClickToAuth = e => {
    e.preventDefault();
    history.push("/auth");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={e => handleClickToIndex(e)}>
          <Typography>商品管理アプリ</Typography>
        </Button>
        <Button color="inherit" onClick={e => handleClickToNew(e)}>新規登録</Button>
        <Button color="inherit" onClick={e => handleClickToSearch(e)}>検索</Button>
        <Button color="inherit" onClick={e => handleClickToAuth(e)}>認証</Button>
      </Toolbar>
    </AppBar>
  );
};

export default connect(
  null,
  {indexRequest, setItems}
)(Nav);
