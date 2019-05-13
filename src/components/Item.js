import React, {Fragment} from 'react';

export const Item = ({formItem, items, inputTitle, inputDescription, inputPrice, addItem}) => {
  return (
    <Fragment>
      <form>
        <label htmlFor="title">商品タイトル</label>
        <input id="title" type="text" onChange={e => inputTitle(e.target.value)}/><br/>
        <label htmlFor="description">商品説明</label>
        <input id="description" type="text" onChange={e => inputDescription(e.target.value)}/><br/>
        <label htmlFor="price">価格</label>
        <input id="price" type="text" onChange={e => inputPrice(e.target.value)}/><br/>
        <input type="button" value="新規作成" onClick={() => addItem(formItem)}/>
      </form>
      <ul>
        {
          items.map(item => {
            return <li key={item.id}>{item.title}</li>;
          })
        }
      </ul>
    </Fragment>
  );
};
