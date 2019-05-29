import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {indexRequest} from "../actions/requests";
import {setItems} from "../actions/items";

const Nav = ({history, indexRequest, setItems}) => {
  const handleClickToIndex = e => {
    e.preventDefault();
    indexRequest();
  };

  const handleClickToSearch = e => {
    e.preventDefault();
    setItems([]);
    history.push("/items/search")
  };

  return (
    <nav>
      <button onClick={e => handleClickToIndex(e)}>商品一覧ページへ</button>
      <Link to="/items/new">新規登録ページへ</Link>
      <button onClick={e => handleClickToSearch(e)}>検索ページへ</button>
      <Link to="/auth">認証ページへ</Link>
    </nav>
  );
};

export default connect(
  null,
  {indexRequest, setItems}
)(Nav);
