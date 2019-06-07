import React from 'react';
import {Button} from "@material-ui/core";

export const ToEditButton = ({history, itemId}) => {
  const handleClick = e => {
    e.preventDefault();
    history.push(`/items/${itemId}/edit`);
  };

  return <Button variant="contained" onClick={e => handleClick(e)}>編集</Button>;
};
