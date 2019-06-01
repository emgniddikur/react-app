import React from 'react';
import {List, ListItem, ListItemText} from "@material-ui/core";

export const ItemList = ({items, showRequest}) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    showRequest(id);
  };

  return (
    <List>
      {
        items.map(item => {
          return (
            <ListItem key={item.id} button onClick={e => handleClick(e, item.id)}>
              <div>
                <img src={item.imageSrc} alt="商品画像"/>
              </div>
              <ListItemText primary={item.title}/>
            </ListItem>
          );
        })
      }
    </List>
  );
};
