import React, {Fragment} from 'react';

export const Item = ({item}) => {
  return (
    <Fragment>
      <table>
        <tbody>
        <tr>
          <td>商品タイトル</td>
          <td>{item.title}</td>
        </tr>
        <tr>
          <td>商品説明</td>
          <td>{item.description}</td>
        </tr>
        <tr>
          <td>価格</td>
          <td>{item.price}</td>
        </tr>
        <tr>
          <td>商品画像</td>
          <td><img src={item.imageSrc} alt="商品画像"/></td>
        </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
