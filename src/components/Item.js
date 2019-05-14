import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

export const Item = ({items, itemId, removeItem}) => {
  const item = items.find(e => e.id === Number(itemId));

  return (
    <Fragment>
      <Link to="/" onClick={() => removeItem(item.id)}>削除</Link>
      <table>
        <tbody>
        <tr>
          <td>商品タイトル</td>
          <td>商品説明</td>
          <td>価格</td>
        </tr>
        <tr>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
        </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
