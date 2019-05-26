import React from 'react';
import {Link} from "react-router-dom";

export const Nav = () => {
  return (
    <header>
      <Link to="/items">商品リスト</Link>
      <Link to="/items/new">新規登録ページへ</Link>
      <Link to="/items/search">検索ページへ</Link>
      <Link to="/auth">認証ページへ</Link>
    </header>
  );
};
