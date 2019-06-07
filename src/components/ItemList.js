import React from 'react';
import {List, ListItem, ListItemText} from "@material-ui/core";
import {ToEditButton} from "./buttons/ToEditButton";
import DeleteButton from "./buttons/DeleteButton";

export const ItemList = ({history, items}) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    history.push(`/items/${id}`);
  };

  return (
    <List>
      {
        items.map(item => {
          return (
            <ListItem key={item.id}>
              <img src={item.imageSrc} alt="商品画像" onClick={e => handleClick(e, item.id)}/>
              <ListItemText primary={item.title} onClick={e => handleClick(e, item.id)}/>
              <ToEditButton history={history} itemId={item.id}/>
              <DeleteButton itemId={item.id}/>
            </ListItem>
          );
        })
      }
    </List>
  );
};
