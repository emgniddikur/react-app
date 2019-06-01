import React from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableRow} from "@material-ui/core";

export const Item = ({history, item, deleteRequest}) => {
  const id = item.id;

  const handleClickToEdit = e => {
    e.preventDefault();
    history.push(`/items/${id}/edit`);
  };

  const handleClickDeleteRequest = e => {
    e.preventDefault();
    deleteRequest(id);
  };

  return (
    <Paper>
      <div>
        <h1>{item.title}</h1>
        <Button onClick={e => handleClickToEdit(e)}>編集</Button>
        <Button color="primary" onClick={e => handleClickDeleteRequest(e)}>削除</Button>
      </div>
      <div>
        <img src={item.imageSrc} alt="商品画像"/>
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>説明文</TableCell>
            <TableCell>{item.description}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>価格</TableCell>
            <TableCell>¥{item.price}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};
