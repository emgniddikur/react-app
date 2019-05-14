import React from 'react';
import {Link} from "react-router-dom";

export const ItemForm = ({formItem, inputTitle, inputDescription, inputPrice, addItem}) => {
  return (
    <form>
      <label htmlFor="title">商品タイトル</label>
      <input id="title" type="text" value={formItem.title} onChange={e => inputTitle(e.target.value)}/><br/>
      <label htmlFor="description">商品説明</label>
      <input id="description" type="text" value={formItem.description}
             onChange={e => inputDescription(e.target.value)}/><br/>
      <label htmlFor="price">価格</label>
      <input id="price" type="text" value={formItem.price} onChange={e => inputPrice(e.target.value)}/><br/>
      <Link to="/">
        <input type="button" value="新規作成" onClick={() => addItem(formItem)}/>
      </Link>
    </form>
  );
};
