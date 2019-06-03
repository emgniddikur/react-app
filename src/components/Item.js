import React from 'react';
import {Paper, Table, TableBody, TableCell, TableRow} from "@material-ui/core";
import DeleteButton from "./DeleteButton";
import {EditButton} from "./EditButton";

export const Item = ({history, item}) => {
  return (
    <Paper>
      <h1>{item.title}</h1>
      <EditButton history={history} itemId={item.id}/>
      <DeleteButton itemId={item.id}/>
      <img src={item.imageSrc} alt="商品画像"/>
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
