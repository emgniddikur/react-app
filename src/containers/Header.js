import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <Fragment>
      <Link to="/">商品リスト</Link>
      <Link to="new">新規登録</Link>
    </Fragment>
  );
};
