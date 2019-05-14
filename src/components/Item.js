import React from 'react';

export const Item = ({items, itemId}) => {
  const item = items.find(e => e.id === Number(itemId));

  return (
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
  );
};
