import React, {Fragment} from 'react';

export const Item = ({item}) => {
  return (
    <Fragment>
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
