import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {indexRequest} from "../actions/requests";

const Nav = ({indexRequest}) => {
  const handleClick = e => {
    e.preventDefault();
    indexRequest();
  };

  return (
    <header>
      <button onClick={e => handleClick(e)}>商品リスト</button>
      <Link to="/items/new">新規登録ページへ</Link>
      <Link to="/items/search">検索ページへ</Link>
      <Link to="/auth">認証ページへ</Link>
    </header>
  );
};

export default connect(
  null,
  {indexRequest}
)(Nav);
