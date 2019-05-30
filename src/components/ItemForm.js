import React from 'react';

export const ItemForm = ({itemId, formItem, inputTitle, inputDescription, inputPrice, inputImageSrc, createRequest, updateRequest}) => {
  const handleFileChange = e => {
    const reader = new FileReader();
    reader.onload = e => {
      inputImageSrc(e.target.result);
      document.getElementById("image").innerHTML = `<img src="${e.target.result}"/><br/>`;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleClick = e => {
    e.preventDefault();
    itemId ? updateRequest(itemId, formItem) : createRequest(formItem);
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
      <label htmlFor="image-src">商品画像</label>
      <input id="image-src" type="file" onChange={e => handleFileChange(e)}/><br/>
      <output id="image"/>
      <input type="button" value={itemId ? "更新" : "新規登録"} onClick={e => handleClick(e)}/>
    </form>
  );
};
