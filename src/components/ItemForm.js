import React from 'react';

export const ItemForm = ({itemId, updateItem, formItem, createItem, history, inputTitle, inputDescription, inputPrice}) => {
  const handleClick = (e) => {
    e.preventDefault();
    itemId ? updateItem(itemId, formItem) : createItem(formItem);
    history.push("/");
  };

  return (
    <form>
      <label htmlFor="title">商品タイトル</label>
      <input id="title" type="text" value={formItem.title}
             onChange={e => inputTitle(e.target.value)}/><br/>
      <label htmlFor="description">商品説明</label>
      <input id="description" type="text" value={formItem.description}
             onChange={e => inputDescription(e.target.value)}/><br/>
      <label htmlFor="price">価格</label>
      <input id="price" type="text" value={formItem.price}
             onChange={e => inputPrice(e.target.value)}/><br/>
      <input type="button" value={itemId ? "更新" : "新規登録"} onClick={(e) => handleClick(e)}/>
    </form>
  );
};
