import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

export const Item = ({items, itemId, deleteItem}) => {
  const item = items.find(e => e.id === Number(itemId));

  return (
    <Fragment>
      <Link to={"/" + itemId + "/edit"}>編集</Link>
      <Link to="/" onClick={() => deleteItem(itemId)}>削除</Link>
      <table>
        <tbody>
        <tr>
          <td>商品タイトル</td>
          <td>商品説明</td>
          <td>価格</td>
          <td>商品画像</td>
        </tr>
        <tr>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td><img src={item.imageSrc} alt="商品画像"/></td>
        </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
