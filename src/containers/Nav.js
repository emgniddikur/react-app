import React from 'react';
import {Link} from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <Link to="/">商品リスト</Link>
      <Link to="/new">新規登録ページへ</Link>
      <Link to="/search">検索ページへ</Link>
    </header>
  );
};
